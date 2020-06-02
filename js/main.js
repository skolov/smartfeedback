var analiticsArray = [];

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
        let textarea = document.querySelector('textarea.review__content-answer-textarea'),
            counterBlock;

        if (textarea !== null) {
            counterBlock = textarea
                    .closest("div.review__content-answer-select-holder")
                    .querySelector("div.review__content-answer-textarea-counter");
        }
            
            
        if (textarea !== null) {
            textarea.onkeyup = () => {
                if (textarea.value.length >= 140) {
                    textarea.value = textarea.value.slice(0, 140)
                }
                counterBlock.innerHTML = `Осталось ${140 - textarea.value.length} симво${getCaseNoun()}`;
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
            document.querySelector('div.graphs__panel-content').style.display = 'none';
            document.querySelector('div.graphs__panel').style.borderRadius = '8px';
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
            let checked = false;
            oneList.querySelectorAll('li.graphs__panel-list-item label').forEach(element => {
                if (element.querySelector('input').checked) {
                    if (!analiticsArray.includes(oneList.querySelector('li.graphs__panel-list-item:first-child').innerText)) {
                        analiticsArray.push(oneList.querySelector('li.graphs__panel-list-item:first-child').innerText);
                    }
                    checked = true;
                }
            })
    
            if (!checked) {
                let index = analiticsArray.indexOf(oneList.querySelector('li.graphs__panel-list-item:first-child').innerText);
                analiticsArray.splice(index, 1)
            }
    
            addToline();
        }
    
    
        function addToline() {
            let line = document.querySelector('input.graphs__panel-input'),
                string = '';
            
            string = analiticsArray.join(', ')
    
            line.value = string;
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
