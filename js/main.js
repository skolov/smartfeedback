var analiticsArray = {},
    stringForTipsGraph;


class Main {
    
    constructor() {
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



    initToggleEyeButton(){
        let eyeButton = document.querySelectorAll('.login__window-password-eye'),
            passwInput = null,
            toggleFlag = true;

        if(eyeButton != null) {
            eyeButton.forEach(element => {
                element.onclick = () => {
                    passwInput = element.closest('div').querySelector('input');
                    if (toggleFlag) {
                        element.style.backgroundImage = "url(/assets/images/icons/eyesOn.svg)";
                        passwInput.setAttribute('type', 'text');
                    } else {
                        element.style.backgroundImage = "url(/assets/images/icons/eyesOff.svg)";
                        passwInput.setAttribute('type', 'password');
                    }
                    toggleFlag = !toggleFlag;
                }
            })
        }
    }




    initToggleProfileMenu() {
        let dropProfileMenu = document.querySelector('button.profile-menu'),
            dropButton = null,
            dropMenu = null;

        if(dropProfileMenu !== null) {
            dropButton = document.querySelector('img.profile-menu'),
            dropMenu = document.querySelector('ul.profile-menu');
        }

        if(dropButton !== null && dropMenu !== null) {
            dropProfileMenu.onclick = (e) => {
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
            }
        }
    }




    initCompanyDropdownMenu(){
        const body = document.querySelector("body");
        body.onload = () => {setCompanyDropdownMenuClickHandler()}
    }




    initTabsReview(){
        let tabs = document.querySelectorAll('.review__tabs-item')
        
        if (tabs != null) {
            tabs.forEach(element => {
                element.onclick = () => {
                    tabs.forEach(element => {
                        let id = element.getAttribute('id'),
                            tabsPage = document.querySelector(`#tab-${id}`);
                        tabsPage.style.display = "none";
                        element.classList.remove('active')

                    })
                    element.classList.add('active');
                    let currentTabId = element.getAttribute('id');
                    document.getElementById(`tab-${currentTabId}`).style.display = "block";
                }
            })
        }
    }



    initCounterTaxtarea() {
        

    }



    initMobileDateInput(){
        let inputDate = document.querySelector('input[data-input=date]'),
            hiddenInputDate = document.querySelector('input[data-input=date] + input');

        if (inputDate != null && hiddenInputDate != null) {
            hiddenInputDate.onchange = () => {
                let value = this.getHumanlyDate(hiddenInputDate.value)
                if (value) {
                    inputDate.value = value
                } else {
                    inputDate.setAttribute('placeholder', 'Возраст')
                }
                
            }
        }
    }






    initMobileStar() {
        let mobileStars = document.querySelectorAll('label[data-star]'),
            mobileRateBlock = document.querySelector('div.mobile__stars-rate-number');

        if( mobileStars != null) {
            mobileStars.forEach(element => {
                element.onclick = () => {
                    mobileRateBlock.innerHTML = `${element.getAttribute('data-star')}/5`
                }
            })
        }
    }


    initMobileAudioDuration() {
        let audio = document.querySelectorAll('div#audio');
        if(audio != null) {
            audio.forEach(element => {
                let audio = element.querySelector('audio'),
                    timeBox = audio.querySelector('span.mobile__attachment-time');
                audio.onloadedmetadata = () => {
                    timeBox.innerHTML = audio.duration;
                }
            });
        }
    }


    initMobileVideoDuration() {
        let video = document.querySelectorAll('div.mobile__attachment-scetch');
        if(video != null) {
            video.forEach(element => {
                let video = element.querySelector('video'),
                    timeBox;
                if (video != null) {
                    timeBox = video.querySelector('span.mobile__attachment-time');
                    video.onloadedmetadata = () => {
                        timeBox.innerHTML = video.duration;
                    }
                }
            });
        }
    }



    initSwitchers() {
        let switchers = document.querySelectorAll('label.settings__panel-switch');

        if(switchers != null) {
            switchers.forEach(element => {
                element.onclick = () => {
                    let parent = element.closest('div.settings__panel-input-holder'),
                    checkbox = parent.querySelector('input[type=checkbox]'),
                    input = parent.querySelector('input.settings__panel-input');

                    if (!checkbox.checked) {
                        input.disabled = true;
                        input.classList.add('not-active')
                    } else {
                        input.disabled = false;
                        input.classList.remove('not-active')
                    }
                }
            })
        }
    }


    initModalWindows() {
        let windows = document.querySelectorAll('div.modal__window');
        if (windows !== null) {
            windows.forEach(element => {
                let closeBtn = element.querySelector('span.modal__close-btn'),
                    backWall = element.closest('div.modal__back');

                if (backWall !== null && closeBtn !== null) {

                    closeBtn.onclick = () => {
                        backWall.style.display = "none";
                    }
    
                    backWall.onmouseup = e => {
                        if (!element.contains(e.target)) {
                            backWall.style.display = "none";
                        } 
                    }
                    
                }
            })
        }
    }

    

    initDocumentEventListener() {

        window.onkeyup = (e) => {
            if (e.keyCode === 27) {
                closeProfileMenu();
                closeDropMenus();
                closeContentGraphs();
            }
        }

        document.addEventListener('mouseup', e => {closeDropMenus(e)} , false)

        function closeProfileMenu() {
            let dropProfileMenu = document.querySelector('button.profile-menu'),
                dropButton = null,
                dropMenu = null;

            if(dropProfileMenu !== null) {
                dropButton = document.querySelector('img.profile-menu'),
                dropMenu = document.querySelector('ul.profile-menu');
                if(dropButton !== null && dropMenu !== null) {
                    dropMenu.style.display = "none";
                    dropButton.style.transform = "matrix(1, 0, 0, -1, 0, 0)";
                    dropProfileMenu.classList.remove('active');
                }
            }
        }


        function closeContentGraphs () {
            let panelContent = document.querySelector('div.graphs__panel-content'),
                panel = document.querySelector('div.graphs__panel');

            if(panelContent !== null && panel !== null) {
                panelContent.style.display = 'none';
                panel.style.borderRadius = '8px';
            }

        }


        function closeDropMenus(e) {

            let dropMenus = document.querySelectorAll('ul.companies__content-footer-dropmenu'),
                headPanel = document.querySelector('ul.companies__head-panel-menu-dropdown'),
                allButtons = document.querySelectorAll('button.companies__content-footer-btn'),
                graphsContent = document.querySelector('div.graphs__panel-content');

            if(e === undefined) {
                dropMenus.forEach(oneMenu => {
                    oneMenu.style.display = 'none';
                });
                allButtons.forEach(oneButton => {
                    oneButton.classList.remove('active');
                });
                closeProfileMenu();
                return;
            }


            if(graphsContent !== null) {
                if(!graphsContent.contains(e.target)) closeContentGraphs()
            }


            if (dropMenus !== null ){
                dropMenus.forEach(oneMenu => {
                    if (!oneMenu.contains(e.target)) {
                        oneMenu.style.display = 'none';
                    }
                })
            }

            if (headPanel !== null && document.querySelector('button.companies__head-panel-profile') !== null) {
                if (
                    !headPanel.contains(e.target) &&
                    !document.querySelector('button.companies__head-panel-profile').contains(e.target)
                ) closeProfileMenu();
            }

            if (allButtons !== null) {
                allButtons.forEach(oneBtn => {
                    if (!oneBtn.contains(e.target)) oneBtn.classList.remove('active')
                })
            }
        }
    }



    getHumanlyDate(value) {

        let dateParts = value.split('-'),
            mounth = {
                '01' : 'Января',
                '02' : 'Февраля',
                '03' : 'Марта',
                '04' : 'Апреля',
                '05' : 'Мая',
                '06' : 'Июня',
                '07' : 'Июля',
                '08' : 'Августа',
                '09' : 'Сентября',
                '10' : 'Октября',
                '11' : 'Ноября',
                '12' : 'Декабря'
            };

        if (
            dateParts[0] != undefined && 
            dateParts[1] != undefined && 
            dateParts[2] != undefined
        ) {
            return dateParts[2] + ' ' + mounth[dateParts[1]] + ' ' + dateParts[0];
        }

        return false;
    }




    initGraphToggle () {
        let barcharts = document.querySelectorAll('div[data-graph-type=barchart]'),
            allGraphItem = document.querySelectorAll('div.graphs__item');
    
        if (barcharts !== null) {
            barcharts.forEach(item => {
                item.style.display = 'none';
            })
        }

        if (allGraphItem !== null) {
            allGraphItem.forEach(graphItem => {
                let allToggleBtn = graphItem.querySelectorAll('div.graphs__item-toggle');
                allToggleBtn.forEach(toggleBtn => {
                    toggleBtn.onclick = () => {

                        allToggleBtn.forEach(toglleBtn => {
                            toglleBtn.classList.remove('active')
                        });

                        toggleBtn.classList.add('active')

                        let type = toggleBtn.getAttribute('data-btn-type'),
                            graphs = graphItem.querySelectorAll('div.graphs__item-graph');
                        graphs.forEach(e => {
                            if (e.getAttribute('data-graph-type') == type) {
                                e.style.display = 'block';
                            } else {
                                e.style.display = 'none';
                            }
                        })
                    }
                });
            })
        }
    }


    initFinderLists () {
        let lists = document.querySelectorAll('ul.graphs__panel-list'),
            input = document.querySelector('input.graphs__panel-input'),
            closeBtn = document.querySelector('span.graphs__panel-search-close');
    
    
    
        if(input !== null) {
            input.onclick = () => {
                let content = document.querySelector('div.graphs__panel-content');
                if (content !== null) {
                    content.style.display = 'block';
                    document.querySelector('div.graphs__panel').style.borderRadius = '8px 0 0 8px';
                }
            }
        }
    
    
        if(closeBtn !== null) {
            closeBtn.onclick = () => {
                let content = document.querySelector('div.graphs__panel-content'),
                    checkBoxes = document.querySelectorAll('input.graphs__panel-checkbox');
    
                if (checkBoxes !== null) {
                    checkBoxes.forEach(e => {
                        e.checked = false;
                    })
                } else {
                    console.log('not found')
                } 
                analiticsArray = [];
                addToline()
                if (content !== null) {
                    content.style.display = 'none';
                    document.querySelector('div.graphs__panel').style.borderRadius = '8px';
                }
            }
        }
        
            
        if (lists !== null) {
            lists.forEach(oneList => {
    
                let firstItem = oneList.querySelector('li.graphs__panel-list-item:first-child'),
                    items = oneList.querySelectorAll('li.graphs__panel-list-item:not(:first-child) label input');
    
    
                items.forEach(item => {
                    item.onclick = () => {
                        checkEmptiness(oneList);
                        getValuesOfChecked(oneList);
                    }
                })
    
                firstItem.onmouseenter = () => {oneList.style.backgroundColor = '#F0F2F7'};
                firstItem.onmouseleave = () => {oneList.style.backgroundColor = '#ffffff'};
                firstItem.querySelector('label input').onclick = () => {
                    if (firstItem.querySelector('input.graphs__panel-checkbox').checked) {
                        oneList.querySelectorAll('input.graphs__panel-checkbox').forEach(element => {
                            element.checked = true;
                        });                      
                    } else {
                        oneList.querySelectorAll('input.graphs__panel-checkbox').forEach(element => {
                            element.checked = false;
                        })
                    }
                    getValuesOfChecked(oneList);
                }
            });
        }
    
    
        function checkEmptiness(oneList) {
            let items = oneList.querySelectorAll('li.graphs__panel-list-item:not(:first-child)'),
                firstItem = oneList.querySelector('li.graphs__panel-list-item:first-child'),
                flagAllchecked = true;
        
            items.forEach(oneItem => {
                if(!oneItem.querySelector('input.graphs__panel-checkbox').checked) {
                    firstItem.querySelector('input.graphs__panel-checkbox').checked = false;
                    flagAllchecked = false; 
                } 
            })
    
            if(flagAllchecked) {
                firstItem.querySelector('input.graphs__panel-checkbox').checked = true;
            }
        }
    
    
        function getValuesOfChecked(oneList) {
            let checked = false,
                controlPoints = [],
                nameCompany = oneList.querySelector('li.graphs__panel-list-item:first-child').innerText;

            if(oneList.querySelector('li.graphs__panel-list-item:first-child label input').checked){
                analiticsArray[nameCompany] = 'Все контрольные точки';
                checked = true;
            } else {
                oneList.querySelectorAll('li.graphs__panel-list-item:not(:first-child) label').forEach(element => {
                    if (element.querySelector('input').checked) {
    
                        if(oneList.querySelector('li.graphs__panel-list-item:first-child label input').checked){
    
                        }
                        controlPoints.push(element.innerText);
                        analiticsArray[nameCompany] = controlPoints;
                        checked = true;
                    }
                })
            }    
            if (!checked) {
                delete analiticsArray[nameCompany]
            }
            addToline();
        }
    
    
        function addToline() {
            let line = document.querySelector('input.graphs__panel-input'),
                concet = '';
            for (var key in analiticsArray) {
                if(typeof(analiticsArray[key]) != 'string') {
                    concet = concet + ' ' + key + ' (' + analiticsArray[key].join(', ') + ')';
                    concet = concet + `${concet === '' ? ' ' : ', '}`;
                } else {
                    concet = concet + ' ' + key + ' (' + analiticsArray[key] + ') ';
                }
            }
            line.value = concet;
        }
    }



    toggleLimitation() {
        let select = document.querySelector('select.review__content-answer-select'),
            counter = document.querySelector('div.review__content-answer-textarea-counter'),
            textarea = document.querySelector('textarea.review__content-answer-textarea');


        function ifsms() {
            if (textarea !== null && counter !== null)  {
                counter.style.display = 'block';
                textarea.style.height = '80px';
                textarea.style.borderRadius = '8px 8px 0 0';
                textarea.setAttribute('maxlength', '140');

                if (textarea.value.length >= 140) {
                    textarea.value = textarea.value.slice(0, 140)
                }
                counter.innerHTML = `Осталось ${140 - textarea.value.length} симво${getCaseNoun()}`;
                textarea.onkeyup = () => {
                    if (textarea.value.length >= 140) {
                        textarea.value = textarea.value.slice(0, 140)
                    }
                    counter.innerHTML = `Осталось ${140 - textarea.value.length} симво${getCaseNoun()}`;
                }
            }
        }


        function ifemail() {
            if(counter !== null && textarea !== null){
                counter.style.display = 'none';
                textarea.style.height = '100px';
                textarea.style.borderRadius = '8px';
                
                textarea.setAttribute('maxlength', '2000');
                textarea.onkeyup = () => {}
            }
        }


        if(select !== null) {
            if(select.value == 'sms') {
                ifsms()
            } else {
                ifemail()
            } 
            
            select.onclick = () => {
                if(select.value == 'email'){
                    ifemail();
                } else {
                    ifsms();        
                }
            }
        }


        function getCaseNoun() {
            let countMod = (140 - textarea.value.length) % 10;
            if (countMod >= 5 && countMod <= 9) return 'лов';
            if (countMod <= 4 && countMod >= 2) return 'ла';
            if (countMod == 1) return 'л';
            if (countMod == 0) return 'лов';
        }

    }


    
}

new Main()


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


function openAlertPopup (idContent) {
    let popupWindow = document.querySelector(`div[data-id-content="${idContent}"]`);

    if (popupWindow !== null) {
        let width = popupWindow.offsetWidth;
        popupWindow.style.marginLeft = `-${width/2}px`;
        setTimeout(() => {
            popupWindow.style.opacity = .7;
            setTimeout(() => {
                popupWindow.style.opacity = 0
            }, 5000)
        }, 500)
        
    }
}



$(document).ready(function () {
    $('#track').on('canplay canplaythrough', function () {

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
            let duration = Math.round(this.duration),
                minutes = Math.floor(duration / 60),
                seconds = duration % 60,
                timer = document.querySelector('span.mobile__attachment-time'),
                btnMobilePlay = document.getElementById('audioPlayAttach');

            if(minutes <= 9) minutes = `0${minutes}`;
            if(seconds <= 9) seconds = `0${seconds}`;

            if(timer !== null && btnMobilePlay !== null) {
                timer.innerText = `${minutes}:${seconds}`;
                btnMobilePlay.onclick = () => {
                    if (!toggleFlag) {
                        this.play();
                        btnMobilePlay.querySelector('img').setAttribute('src', '/assets/images/icons/pause-ico-btn.svg');
                        interval = setInterval(() => {
                            getDateWhilePlaing(this, btnMobilePlay, duration)
                        }, 100);
                    } else {
                        this.pause();
                        btnMobilePlay.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
                        interval = clearInterval(interval);
                    }
                    toggleFlag = !toggleFlag;
                }
            }
            
            
        };

        function getDateWhilePlaing(audio, btnMobilePlay, duration) {
            let currentTime = Math.round((audio.currentTime)*100)/100;
            if(duration < currentTime + 0.1) {
                btnMobilePlay.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
                interval = clearInterval(interval);
                toggleFlag = !toggleFlag;
            }
        }
    });

    
});
function initDataPicker(date) {
    var toDay = new Date(),
        lastDay;

    if(date === '') {
        lastDay = new Date()
    } else {
        lastDay = date.split('.');
        lastDay = new Date(lastDay[2], lastDay[1] - 1, lastDay[0]);
    }

    $(function () {
      $('input[name="daterange"]').daterangepicker({
        "autoApply": true,
        "locale": {
          "format": "DD-MM-YYYY",
          "separator": " - ",
          "applyLabel": "Apply",
          "cancelLabel": "Cancel",
          "fromLabel": "From",
          "toLabel": "To",
          "customRangeLabel": "Custom",
          "weekLabel": "W",
          "daysOfWeek": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          "monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
          "firstDay": 1
        },
        "startDate": lastDay,
        "endDate": new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate()),
        "minDate": lastDay,
        "maxDate": new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate())
      }, function (start, end, label) {});
    });

    //getLengthOfCurrentPeriod(lastDay, new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate()))
  }

/*
function getLengthOfCurrentPeriod(lastDay, toDay) {
    stringForTipsGraph = (toDay - lastDay) / (60 * 60 * 24 * 1000);
    let div = document.createElement('div'), allXaxis = document.querySelectorAll(".apexcharts-xaxis-texts-g");
        div.className = "alert-xaxis-charts";
        div.innerHTML = "Дни";
        document.body.append(div);

    if(allXaxis) {
        console.log(allXaxis)
    }
}
*/

$(function(){
    $("#phoneMask").mask("+7(999) 999-9999");
    $('select').niceSelect();
});
