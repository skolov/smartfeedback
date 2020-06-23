const gulp = require("gulp"),
    less = require("gulp-less"),
    plumber = require("gulp-plumber"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    server = require("browser-sync").create(),
    minify = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    imagemin = require("gulp-imagemin"),
    webp = require("gulp-webp"),
    svgstore = require("gulp-svgstore"),
    svgmin = require("gulp-svgmin"),
    path = require("path"),
    posthtml = require("gulp-posthtml"),
    include = require("posthtml-include"),
    del = require("del"),
    jsminify = require("gulp-minify"),
    babel = require("gulp-babel");

gulp.task("less", function() {
    return new Promise(function(resolve, reject) {
        gulp.src("../less/style.less")
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest("../build/css"))
            .pipe(minify())
            .pipe(rename("style.min.css"))
            .pipe(sourcemaps.write("../css"))
            .pipe(gulp.dest("../build/css"))
            .pipe(server.stream());
        resolve();
    });
});

gulp.task("serve", function(done) {
    server.init({
        server: "../build/",
        injectChanges: true,
        open: false
    });

    gulp.watch("../less/**/*.less", gulp.series("less"));
    // gulp.watch("../scss/**/*.scss", gulp.series("sass"));
    gulp.watch("../*.html", gulp.series("copy:html", "include"));
    gulp.watch("../assets/images/sprite-icons/*.svg", gulp.series("svgstore"));
    gulp.watch("../sections/*.html", gulp.series("copy:html", "include"));
    gulp.watch("../*.html").on("change", server.reload);
    gulp.watch("../assets/images/**/*.{png,jpg,svg,gif}", gulp.series("images"));
    gulp.watch("../animation/**", gulp.series("copy"));
    gulp.watch("../js/*.js", gulp.series("copy:js", "babel")).on(
        "change",
        server.reload
    );

    done();
});

gulp.task("images", function() {
    return new Promise(function(resolve, reject) {
        gulp.src("../assets/images/**/*.{png,jpg,svg,gif}")
            .pipe(
                imagemin([
                    imagemin.optipng({
                        optimizationLevel: 3
                    }),
                    imagemin.jpegtran({
                        progressive: true
                    }),
                    imagemin.svgo({
                        plugins: [
                            {
                                convertShapeToPath: false
                            },
                            {
                                cleanupIDs: true
                            },
                            {
                                removeStyleElement: false
                            }
                        ]
                    })
                ])
            )
            .pipe(gulp.dest("../build/assets/images"));
        resolve();
    });
});

// gulp.task("webp", function () {
//   return gulp.src("images/**/*.{png,jpg}")
//     .pipe(webp({quality: 90}))
//     .pipe(gulp.dest("build/images"));
// });

gulp.task("svgstore", function() {
    return new Promise(function(resolve, reject) {
        gulp.src("../assets/images/sprite-icons/*.svg")
            .pipe(
                svgmin(function(file) {
                    var prefix = path.basename(
                        file.relative,
                        path.extname(file.relative)
                    );
                    return {
                        plugins: [
                            {
                                cleanupIDs: {
                                    prefix: prefix + "-",
                                    minify: true
                                }
                            }
                        ]
                    };
                })
            )
            .pipe(svgstore())
            .pipe(gulp.dest("../build/assets/images/sprite-icons/sprite"));
        resolve();
    });
});

gulp.task("include", function() {
    return new Promise(function(resolve, reject) {
        gulp.src("../*.html")
            .pipe(posthtml([include()]))
            .pipe(gulp.dest("../build"));
        resolve();
    });
});

// gulp.task('jsminify', function () {
//   return new Promise(function (resolve, reject) {
//     gulp.src('../js/*.js')
//       .pipe(sourcemaps.init())
//       .pipe(babel({
//         presets: [
//           ['@babel/preset-env', {
//             "targets": {
//               "safari": 9
//             }
//           }],
//           'minify'
//         ],
//         plugins: [
//           "@babel/plugin-transform-runtime",
//           {
//             "polyfill": false,
//             "regenerator": true
//           }
//         ]
//       }))
//       // .pipe(concat('main.js'))
//       // .pipe(rename("main.min.js"))
//       .pipe(sourcemaps.write('.'))
//       .pipe(gulp.dest(`../build/js`))
//     resolve();
//   });
// });

gulp.task("babel", function() {
    return new Promise(function(resolve, reject) {
        gulp.src("../js/*.js")
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(`../build/js`));
        resolve();
    });
});

// gulp.task('jsminify', function () {
//   return new Promise(function (resolve, reject) {
//     gulp.src('../js/*.js')
//       .pipe(jsminify({
//         ext: {
//           min: '.min.js'
//         },
//         exclude: ['tasks'],
//         ignoreFiles: ['*.min.js', 'chartdata.js']
//       }))
//       .pipe(gulp.dest('../build/js'));
//     resolve();
//   });
// });

gulp.task("copy", function() {
    return gulp
        .src(
            [
                "../fonts/**/*.{woff,woff2}",
                "../js/**",
                "../animation/**"
                // "../css/*.css"
            ],
            {
                base: "../"
            }
        )
        .pipe(gulp.dest("../build"));
});

gulp.task("copy:html", function() {
    return gulp
        .src(["../*.html"], {
            base: "../"
        })
        .pipe(gulp.dest("../build"));
});

gulp.task("copy:images", function() {
    return gulp
        .src(["../assets/images/**/*.{png,jpg,svg,gif}"], {
            base: "../"
        })
        .pipe(gulp.dest("../build"));
});

gulp.task("copy:js", function() {
    return gulp
        .src(["../js/*.js"], {
            base: "../"
        })
        .pipe(gulp.dest("../build/"));
});

gulp.task("clean", function() {
    return del("../build", {
        force: true
    });
});

gulp.task(
    "build",
    gulp.series(
        "clean",
        "copy",
        "less",
        "images",
        "svgstore",
        "babel",
        "include"
    )
);
