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
    this.initSwitchers();
    this.initMobileDateInput();
    this.initMobileStar();
    this.initMobileAudioDuration();
    this.initMobileVideoDuration();
    this.initModalWindows();
    this.initDocumentEventListener();
    this.initCounterTaxtarea();
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

      if (dropProfileMenu !== null) {
        dropButton = document.querySelector('img.profile-menu'), dropMenu = document.querySelector('ul.profile-menu');
      }

      if (dropButton !== null && dropMenu !== null) {
        dropProfileMenu.onclick = function (e) {
          e.preventDefault();

          if (!dropProfileMenu.classList.contains('active')) {
            dropProfileMenu.classList.add('active');
            dropMenu.style.display = "block";
            dropButton.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
          } else {
            dropMenu.style.display = "none";
            dropButton.style.transform = "matrix(1, 0, 0, -1, 0, 0)";
            dropProfileMenu.classList.remove('active');
          }
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
              tabsPage.style.display = "none";
              element.classList.remove('active');
            });
            element.classList.add('active');
            var currentTabId = element.getAttribute('id');
            document.getElementById("tab-".concat(currentTabId)).style.display = "block";
          };
        });
      }
    }
  }, {
    key: "initCounterTaxtarea",
    value: function initCounterTaxtarea() {
      var textarea = document.querySelector('textarea.review__content-answer-textarea'),
          counterBlock;

      if (textarea !== null) {
        counterBlock = textarea.closest("div.review__content-answer-select-holder").querySelector("div.review__content-answer-textarea-counter");
      }

      if (textarea !== null) {
        textarea.onkeyup = function () {
          if (textarea.value.length >= 140) {
            textarea.value = textarea.value.slice(0, 140);
          }

          counterBlock.innerHTML = "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ".concat(140 - textarea.value.length, " \u0441\u0438\u043C\u0432\u043E").concat(getCaseNoun());
        };
      }

      function getCaseNoun() {
        var countMod = (140 - textarea.value.length) % 10;
        if (countMod >= 5 && countMod <= 9) return 'лов';
        if (countMod <= 4 && countMod >= 2) return 'ла';
        if (countMod == 1) return 'л';
        if (countMod == 0) return 'лов';
      }
    }
  }, {
    key: "initMobileDateInput",
    value: function initMobileDateInput() {
      var _this = this;

      var inputDate = document.querySelector('input[data-input=date]'),
          hiddenInputDate = document.querySelector('input[data-input=date] + input');

      if (inputDate != null && hiddenInputDate != null) {
        hiddenInputDate.onchange = function () {
          var value = _this.getHumanlyDate(hiddenInputDate.value);

          if (value) {
            inputDate.value = value;
          } else {
            inputDate.setAttribute('placeholder', 'Возраст');
          }
        };
      }
    }
  }, {
    key: "initMobileStar",
    value: function initMobileStar() {
      var mobileStars = document.querySelectorAll('label[data-star]'),
          mobileRateBlock = document.querySelector('div.mobile__stars-rate-number');

      if (mobileStars != null) {
        mobileStars.forEach(function (element) {
          element.onclick = function () {
            mobileRateBlock.innerHTML = "".concat(element.getAttribute('data-star'), "/5");
          };
        });
      }
    }
  }, {
    key: "initMobileAudioDuration",
    value: function initMobileAudioDuration() {
      var audio = document.querySelectorAll('div#audio');

      if (audio != null) {
        audio.forEach(function (element) {
          var audio = element.querySelector('audio'),
              timeBox = audio.querySelector('span.mobile__attachment-time');

          audio.onloadedmetadata = function () {
            timeBox.innerHTML = audio.duration;
          };
        });
      }
    }
  }, {
    key: "initMobileVideoDuration",
    value: function initMobileVideoDuration() {
      var video = document.querySelectorAll('div.mobile__attachment-scetch');

      if (video != null) {
        video.forEach(function (element) {
          var video = element.querySelector('video'),
              timeBox;

          if (video != null) {
            timeBox = video.querySelector('span.mobile__attachment-time');

            video.onloadedmetadata = function () {
              timeBox.innerHTML = video.duration;
            };
          }
        });
      }
    }
  }, {
    key: "initSwitchers",
    value: function initSwitchers() {
      var switchers = document.querySelectorAll('label.settings__panel-switch');

      if (switchers != null) {
        switchers.forEach(function (element) {
          element.onclick = function () {
            var parent = element.closest('div.settings__panel-input-holder'),
                checkbox = parent.querySelector('input[type=checkbox]'),
                input = parent.querySelector('input.settings__panel-input');

            if (!checkbox.checked) {
              input.disabled = true;
              input.classList.add('not-active');
            } else {
              input.disabled = false;
              input.classList.remove('not-active');
            }
          };
        });
      }
    }
  }, {
    key: "initModalWindows",
    value: function initModalWindows() {
      var windows = document.querySelectorAll('div.modal__window');

      if (windows !== null) {
        windows.forEach(function (element) {
          var closeBtn = element.querySelector('span.modal__close-btn'),
              backWall = element.closest('div.modal__back');

          closeBtn.onclick = function () {
            backWall.style.display = "none";
          };

          backWall.onmouseup = function (e) {
            if (!element.contains(e.target)) {
              backWall.style.display = "none";
            }
          };
        });
      }
    }
  }, {
    key: "initDocumentEventListener",
    value: function initDocumentEventListener() {
      document.addEventListener('mouseup', function (e) {
        document.querySelectorAll('ul.companies__content-footer-dropmenu').forEach(function (oneMenu) {
          if (!oneMenu.contains(e.target)) {
            oneMenu.style.display = 'none';
          }
        });

        if (!document.querySelector("ul.companies__head-panel-menu-dropdown").contains(e.target) && !document.querySelector('button.companies__head-panel-profile').contains(e.target)) {
          closeProfileMenu();
        }

        document.querySelectorAll('button.companies__content-footer-btn').forEach(function (oneBtn) {
          if (!oneBtn.contains(e.target)) oneBtn.classList.remove('active');
        });
      }, false);

      function closeProfileMenu() {
        var dropProfileMenu = document.querySelector('button.profile-menu'),
            dropButton = null,
            dropMenu = null;

        if (dropProfileMenu !== null) {
          dropButton = document.querySelector('img.profile-menu'), dropMenu = document.querySelector('ul.profile-menu');

          if (dropButton !== null && dropMenu !== null) {
            dropMenu.style.display = "none";
            dropButton.style.transform = "matrix(1, 0, 0, -1, 0, 0)";
            dropProfileMenu.classList.remove('active');
          }
        }
      }
    }
  }, {
    key: "getHumanlyDate",
    value: function getHumanlyDate(value) {
      var dateParts = value.split('-'),
          mounth = {
        '01': 'Января',
        '02': 'Февраля',
        '03': 'Марта',
        '04': 'Апреля',
        '05': 'Мая',
        '06': 'Июня',
        '07': 'Июля',
        '08': 'Августа',
        '09': 'Сентября',
        '10': 'Октября',
        '11': 'Ноября',
        '12': 'Декабря'
      };

      if (dateParts[0] != undefined && dateParts[1] != undefined && dateParts[2] != undefined) {
        return dateParts[2] + ' ' + mounth[dateParts[1]] + ' ' + dateParts[0];
      }

      return false;
    }
  }]);

  return Main;
}();

new Main();

function setCompanyDropdownMenuClickHandler() {
  var companyDropBtn = document.querySelectorAll('button.companies__content-footer-btn');

  if (companyDropBtn !== null) {
    companyDropBtn.forEach(function (oneBtn) {
      oneBtn.onclick = function () {
        var parent = oneBtn.closest('div.companies__content-footer-dropholder'),
            dropMenu = parent.querySelector('ul.companies__content-footer-dropmenu');

        if (oneBtn.classList.contains('active')) {
          oneBtn.classList.remove('active');
          dropMenu.style.display = "none";
        } else {
          oneBtn.classList.add('active');
          dropMenu.style.display = "block";
        }
      };
    });
  }
}
//# sourceMappingURL=main.js.map
