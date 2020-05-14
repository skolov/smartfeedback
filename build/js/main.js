function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);

    this.initToggleEyeButton();
    this.initToggleProfileMenu();
    this.initCompanyDropdownMenu();
    this.initTabsReview();
  }

  _createClass(Main, [{
    key: "initToggleEyeButton",
    value: function initToggleEyeButton() {
      var eyeButton = document.querySelectorAll('.login__window-password-eye'),
          passwInput = null,
          toggleFlag = true;

      if (eyeButton != null) {
        eyeButton.forEach(function (element) {
          element.onclick = function () {
            passwInput = element.closest('div').querySelector('input');

            if (toggleFlag) {
              element.style.backgroundImage = "url(/assets/images/icons/eyesOn.svg)";
              passwInput.setAttribute('type', 'text');
            } else {
              element.style.backgroundImage = "url(/assets/images/icons/eyesOff.svg)";
              passwInput.setAttribute('type', 'password');
            }

            toggleFlag = !toggleFlag;
          };
        });
      }
    }
  }, {
    key: "initToggleProfileMenu",
    value: function initToggleProfileMenu() {
      var dropProfileMenu = document.querySelector('button.profile-menu'),
          dropButton = null,
          dropMenu = null;

      if (dropProfileMenu != null) {
        dropButton = document.querySelector('img.profile-menu'), dropMenu = document.querySelector('ul.profile-menu');
        toggleFlag = true;
      }

      if (dropButton != null && dropMenu != null) {
        dropProfileMenu.onclick = function (e) {
          e.preventDefault();

          if (toggleFlag) {
            dropProfileMenu.classList.add('active');
            dropMenu.style.display = "block";
            dropButton.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
          } else {
            dropMenu.style.display = "none";
            dropButton.style.transform = "matrix(1, 0, 0, -1, 0, 0)";
            dropProfileMenu.classList.remove('active');
          }

          toggleFlag = !toggleFlag;
        };
      }
    }
  }, {
    key: "initCompanyDropdownMenu",
    value: function initCompanyDropdownMenu() {
      var body = document.querySelector("body");

      body.onload = function () {
        setCompanyDropdownMenuClickHandler();
      };
    }
  }, {
    key: "initTabsReview",
    value: function initTabsReview() {
      var tabs = document.querySelectorAll('.review__tabs-item');

      if (tabs != null) {
        tabs.forEach(function (element) {
          element.onclick = function () {
            tabs.forEach(function (element) {
              var id = element.getAttribute('id'),
                  tabsPage = document.querySelector("#tab-".concat(id));
              console.log(id);
              tabsPage.style.display = "none";
              element.classList.remove('active');
            });
            element.classList.add('active');
            var currentTabId = element.getAttribute('id');
            console.log(currentTabId);
            document.getElementById("tab-".concat(currentTabId)).style.display = "block";
            console.log(document.getElementById("tab-".concat(currentTabId)));
          };
        });
      }
    }
  }]);

  return Main;
}();

new Main();

function setCompanyDropdownMenuClickHandler() {
  var companyDropBtn = document.querySelectorAll('button.companies__content-footer-btn'),
      companyDropMenus = document.querySelectorAll('ul.companies__content-footer-dropmenu');
  companyDropBtn.forEach(function (btn) {
    btn.onclick = function () {
      var parent = btn.closest('div.companies__content-footer-dropholder'),
          dropMenu = parent.querySelector('ul.companies__content-footer-dropmenu');

      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        dropMenu.style.display = "none";
      } else {
        if (companyDropBtn != null && companyDropMenus != null) {
          companyDropBtn.forEach(function (element) {
            if (element.classList.contains('active')) {
              var parent = element.closest('div.companies__content-footer-dropholder'),
                  dropMenu = parent.querySelector('ul.companies__content-footer-dropmenu');
              element.classList.remove('active');
              dropMenu.style.display = "none";
            }
          });
        }

        btn.classList.add('active');
        dropMenu.style.display = "block";
      }
    };
  });
}
//# sourceMappingURL=main.js.map
