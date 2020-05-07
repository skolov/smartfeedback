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
  }

  _createClass(Main, [{
    key: "initToggleEyeButton",
    value: function initToggleEyeButton() {
      var eyeButton = document.querySelector('.login__window-password-eye'),
          passwInput = null,
          toggleFlag = true;

      if (eyeButton != null) {
        passwInput = eyeButton.previousSibling.previousSibling;

        eyeButton.onclick = function () {
          if (toggleFlag) {
            eyeButton.style.background = "url(/images/icons/eyesOn.svg)";
            passwInput.setAttribute('type', 'text');
          } else {
            eyeButton.style.background = "url(/images/icons/eyesOff.svg)";
            passwInput.setAttribute('type', 'password');
          }

          toggleFlag = !toggleFlag;
        };
      }
    }
  }, {
    key: "initToggleProfileMenu",
    value: function initToggleProfileMenu() {
      var dropProfileMenu = document.querySelector('a.profile-menu'),
          dropButton = null,
          dropMenu = null;
      console.log(dropProfileMenu);

      if (dropProfileMenu != null) {
        dropButton = document.querySelector('img.profile-menu'), dropMenu = document.querySelector('ul.profile-menu');
        toggleFlag = true;
      }

      console.log(dropButton);
      console.log(dropMenu);

      if (dropButton != null && dropMenu != null) {
        dropProfileMenu.onclick = function (e) {
          e.preventDefault();

          if (toggleFlag) {
            dropMenu.style.display = "block";
            dropButton.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
          } else {
            dropMenu.style.display = "none";
            dropButton.style.transform = "matrix(1, 0, 0, -1, 0, 0)";
          }

          toggleFlag = !toggleFlag;
        };
      }
    }
  }]);

  return Main;
}();

new Main();
//# sourceMappingURL=main.js.map
