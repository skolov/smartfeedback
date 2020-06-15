function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var analiticsArray = {};

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
    this.initGraphToggle();
    this.initFinderLists();
    this.toggleLimitation();
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
    value: function initCounterTaxtarea() {}
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

          if (backWall !== null && closeBtn !== null) {
            closeBtn.onclick = function () {
              backWall.style.display = "none";
            };

            backWall.onmouseup = function (e) {
              if (!element.contains(e.target)) {
                backWall.style.display = "none";
              }
            };
          }
        });
      }
    }
  }, {
    key: "initDocumentEventListener",
    value: function initDocumentEventListener() {
      window.onkeyup = function (e) {
        if (e.keyCode === 27) {
          closeProfileMenu();
          closeDropMenus();
          closeContentGraphs();
        }
      };

      document.addEventListener('mouseup', function (e) {
        closeDropMenus(e);
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

      function closeContentGraphs() {
        var panelContent = document.querySelector('div.graphs__panel-content'),
            panel = document.querySelector('div.graphs__panel');

        if (panelContent !== null && panel !== null) {
          panelContent.style.display = 'none';
          panel.style.borderRadius = '8px';
        }
      }

      function closeDropMenus(e) {
        var dropMenus = document.querySelectorAll('ul.companies__content-footer-dropmenu'),
            headPanel = document.querySelector('ul.companies__head-panel-menu-dropdown'),
            allButtons = document.querySelectorAll('button.companies__content-footer-btn'),
            graphsContent = document.querySelector('div.graphs__panel-content');

        if (e === undefined) {
          dropMenus.forEach(function (oneMenu) {
            oneMenu.style.display = 'none';
          });
          allButtons.forEach(function (oneButton) {
            oneButton.classList.remove('active');
          });
          closeProfileMenu();
          return;
        }

        if (graphsContent !== null) {
          if (!graphsContent.contains(e.target)) closeContentGraphs();
        }

        if (dropMenus !== null) {
          dropMenus.forEach(function (oneMenu) {
            if (!oneMenu.contains(e.target)) {
              oneMenu.style.display = 'none';
            }
          });
        }

        if (headPanel !== null && document.querySelector('button.companies__head-panel-profile') !== null) {
          if (!headPanel.contains(e.target) && !document.querySelector('button.companies__head-panel-profile').contains(e.target)) closeProfileMenu();
        }

        if (allButtons !== null) {
          allButtons.forEach(function (oneBtn) {
            if (!oneBtn.contains(e.target)) oneBtn.classList.remove('active');
          });
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
  }, {
    key: "initGraphToggle",
    value: function initGraphToggle() {
      var barcharts = document.querySelectorAll('div[data-graph-type=barchart]'),
          allGraphItem = document.querySelectorAll('div.graphs__item');

      if (barcharts !== null) {
        barcharts.forEach(function (item) {
          item.style.display = 'none';
        });
      }

      if (allGraphItem !== null) {
        allGraphItem.forEach(function (graphItem) {
          var allToggleBtn = graphItem.querySelectorAll('div.graphs__item-toggle');
          allToggleBtn.forEach(function (toggleBtn) {
            toggleBtn.onclick = function () {
              allToggleBtn.forEach(function (toglleBtn) {
                toglleBtn.classList.remove('active');
              });
              toggleBtn.classList.add('active');
              var type = toggleBtn.getAttribute('data-btn-type'),
                  graphs = graphItem.querySelectorAll('div.graphs__item-graph');
              graphs.forEach(function (e) {
                if (e.getAttribute('data-graph-type') == type) {
                  e.style.display = 'block';
                } else {
                  e.style.display = 'none';
                }
              });
            };
          });
        });
      }
    }
  }, {
    key: "initFinderLists",
    value: function initFinderLists() {
      var lists = document.querySelectorAll('ul.graphs__panel-list'),
          input = document.querySelector('input.graphs__panel-input'),
          closeBtn = document.querySelector('span.graphs__panel-search-close');

      if (input !== null) {
        input.onclick = function () {
          var content = document.querySelector('div.graphs__panel-content');

          if (content !== null) {
            content.style.display = 'block';
            document.querySelector('div.graphs__panel').style.borderRadius = '8px 0 0 8px';
          }
        };
      }

      if (closeBtn !== null) {
        closeBtn.onclick = function () {
          var content = document.querySelector('div.graphs__panel-content'),
              checkBoxes = document.querySelectorAll('input.graphs__panel-checkbox');

          if (checkBoxes !== null) {
            checkBoxes.forEach(function (e) {
              e.checked = false;
            });
          } else {
            console.log('not found');
          }

          analiticsArray = [];
          addToline();

          if (content !== null) {
            content.style.display = 'none';
            document.querySelector('div.graphs__panel').style.borderRadius = '8px';
          }
        };
      }

      if (lists !== null) {
        lists.forEach(function (oneList) {
          var firstItem = oneList.querySelector('li.graphs__panel-list-item:first-child'),
              items = oneList.querySelectorAll('li.graphs__panel-list-item:not(:first-child) label input');
          items.forEach(function (item) {
            item.onclick = function () {
              checkEmptiness(oneList);
              getValuesOfChecked(oneList);
            };
          });

          firstItem.onmouseenter = function () {
            oneList.style.backgroundColor = '#F0F2F7';
          };

          firstItem.onmouseleave = function () {
            oneList.style.backgroundColor = '#ffffff';
          };

          firstItem.querySelector('label input').onclick = function () {
            if (firstItem.querySelector('input.graphs__panel-checkbox').checked) {
              oneList.querySelectorAll('input.graphs__panel-checkbox').forEach(function (element) {
                element.checked = true;
              });
            } else {
              oneList.querySelectorAll('input.graphs__panel-checkbox').forEach(function (element) {
                element.checked = false;
              });
            }

            getValuesOfChecked(oneList);
          };
        });
      }

      function checkEmptiness(oneList) {
        var items = oneList.querySelectorAll('li.graphs__panel-list-item:not(:first-child)'),
            firstItem = oneList.querySelector('li.graphs__panel-list-item:first-child'),
            flagAllchecked = true;
        items.forEach(function (oneItem) {
          if (!oneItem.querySelector('input.graphs__panel-checkbox').checked) {
            firstItem.querySelector('input.graphs__panel-checkbox').checked = false;
            flagAllchecked = false;
          }
        });

        if (flagAllchecked) {
          firstItem.querySelector('input.graphs__panel-checkbox').checked = true;
        }
      }

      function getValuesOfChecked(oneList) {
        var checked = false,
            controlPoints = [],
            nameCompany = oneList.querySelector('li.graphs__panel-list-item:first-child').innerText;

        if (oneList.querySelector('li.graphs__panel-list-item:first-child label input').checked) {
          analiticsArray[nameCompany] = 'Все контрольные точки';
          checked = true;
        } else {
          oneList.querySelectorAll('li.graphs__panel-list-item:not(:first-child) label').forEach(function (element) {
            if (element.querySelector('input').checked) {
              if (oneList.querySelector('li.graphs__panel-list-item:first-child label input').checked) {}

              controlPoints.push(element.innerText);
              analiticsArray[nameCompany] = controlPoints;
              checked = true;
            }
          });
        }

        if (!checked) {
          delete analiticsArray[nameCompany];
        }

        addToline();
      }

      function addToline() {
        var line = document.querySelector('input.graphs__panel-input'),
            concet = '';

        for (var key in analiticsArray) {
          if (typeof analiticsArray[key] != 'string') {
            concet = concet + ' ' + key + ' (' + analiticsArray[key].join(', ') + ')';
            concet = concet + "".concat(concet === '' ? ' ' : ', ');
          } else {
            concet = concet + ' ' + key + ' (' + analiticsArray[key] + ') ';
          }
        }

        line.value = concet;
      }
    }
  }, {
    key: "toggleLimitation",
    value: function toggleLimitation() {
      var select = document.querySelector('select.review__content-answer-select'),
          counter = document.querySelector('div.review__content-answer-textarea-counter'),
          textarea = document.querySelector('textarea.review__content-answer-textarea');

      function ifsms() {
        if (textarea !== null && counter !== null) {
          counter.style.display = 'block';
          textarea.style.height = '80px';
          textarea.style.borderRadius = '8px 8px 0 0';
          textarea.setAttribute('maxlength', '140');

          if (textarea.value.length >= 140) {
            textarea.value = textarea.value.slice(0, 140);
          }

          counter.innerHTML = "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ".concat(140 - textarea.value.length, " \u0441\u0438\u043C\u0432\u043E").concat(getCaseNoun());

          textarea.onkeyup = function () {
            if (textarea.value.length >= 140) {
              textarea.value = textarea.value.slice(0, 140);
            }

            counter.innerHTML = "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ".concat(140 - textarea.value.length, " \u0441\u0438\u043C\u0432\u043E").concat(getCaseNoun());
          };
        }
      }

      function ifemail() {
        if (counter !== null && textarea !== null) {
          counter.style.display = 'none';
          textarea.style.height = '100px';
          textarea.style.borderRadius = '8px';
          textarea.setAttribute('maxlength', '2000');

          textarea.onkeyup = function () {};
        }
      }

      if (select !== null) {
        if (select.value == 'sms') {
          ifsms();
        } else {
          ifemail();
        }

        select.onclick = function () {
          if (select.value == 'email') {
            ifemail();
          } else {
            ifsms();
          }
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

function openAlertPopup(idContent) {
  var popupWindow = document.querySelector("div[data-id-content=\"".concat(idContent, "\"]"));

  if (popupWindow !== null) {
    var width = popupWindow.offsetWidth;
    popupWindow.style.marginLeft = "-".concat(width / 2, "px");
    setTimeout(function () {
      popupWindow.style.opacity = .7;
      setTimeout(function () {
        popupWindow.style.opacity = 0;
      }, 5000);
    }, 500);
  }
}

$(document).ready(function () {
  $('#track').on('canplay canplaythrough', function () {
    var _this2 = this;

    var interval,
        toggleFlag = false;

    if (this.duration === Infinity) {
      this.currentTime = 1e101;

      this.ontimeupdate = function () {
        this.ontimeupdate = function () {
          return;
        };
      };

      this.currentTime = 0;
    } else {
      var duration = Math.round(this.duration),
          minutes = Math.floor(duration / 60),
          seconds = duration % 60,
          timer = document.querySelector('span.mobile__attachment-time'),
          btnMobilePlay = document.getElementById('audioPlayAttach');
      if (minutes <= 9) minutes = "0".concat(minutes);
      if (seconds <= 9) seconds = "0".concat(seconds);

      if (timer !== null && btnMobilePlay !== null) {
        timer.innerText = "".concat(minutes, ":").concat(seconds);

        btnMobilePlay.onclick = function () {
          if (!toggleFlag) {
            _this2.play();

            btnMobilePlay.querySelector('img').setAttribute('src', '/assets/images/icons/pause-ico-btn.svg');
            interval = setInterval(function () {
              getDateWhilePlaing(_this2, btnMobilePlay, duration);
            }, 100);
          } else {
            _this2.pause();

            btnMobilePlay.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
            interval = clearInterval(interval);
          }

          toggleFlag = !toggleFlag;
        };
      }
    }

    ;

    function getDateWhilePlaing(audio, btnMobilePlay, duration) {
      var currentTime = Math.round(audio.currentTime * 100) / 100;

      if (duration < currentTime + 0.1) {
        btnMobilePlay.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
        interval = clearInterval(interval);
        toggleFlag = !toggleFlag;
      }
    }
  });
});
//# sourceMappingURL=main.js.map
