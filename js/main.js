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
        this.initCounterTaxtarea()
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

                closeBtn.onclick = () => {
                    backWall.style.display = "none";
                }

                backWall.onmouseup = e => {
                    if (!element.contains(e.target)) {
                        backWall.style.display = "none";
                    } 
                }
            })
        }
    }

    

    initDocumentEventListener() {
        document.addEventListener('mouseup', e => {

            document.querySelectorAll('ul.companies__content-footer-dropmenu').forEach(oneMenu => {
                if (!oneMenu.contains(e.target)) {
                    oneMenu.style.display = 'none';
                }
            })

            if (
                !document.querySelector("ul.companies__head-panel-menu-dropdown").contains(e.target) &&
                !document.querySelector('button.companies__head-panel-profile').contains(e.target)
            ) {
                closeProfileMenu()
            }

            document.querySelectorAll('button.companies__content-footer-btn').forEach(oneBtn => {
                if (!oneBtn.contains(e.target)) oneBtn.classList.remove('active')
            })

        }, false)


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