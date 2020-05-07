const entry = [
  [
    "@babel/polyfill", "./app/js"
  ]
];

const presets = [
  [
    "@babel/env", {
      "modules": false,
      "useBuiltIns": "entry",
    }
  ],
];

const plugins = [
  [
    "@babel/plugin-transform-runtime"
  ],
];

// const plugins = [
//   [
//     "@babel/plugin-transform-async-to-generator"
//   ],
// ];

module.exports = {
  presets
};