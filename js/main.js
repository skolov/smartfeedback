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

        if(dropProfileMenu != null) {
            dropButton = document.querySelector('img.profile-menu'),
            dropMenu = document.querySelector('ul.profile-menu');
            toggleFlag = true;
        }

        if(dropButton != null && dropMenu != null) {
            dropProfileMenu.onclick = (e) => {
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
    var companyDropBtn = document.querySelectorAll('button.companies__content-footer-btn'),
        companyDropMenus = document.querySelectorAll('ul.companies__content-footer-dropmenu');




    

    companyDropBtn.forEach(function (oneBtn) {

        oneBtn.onclick = function () {
            var parent = oneBtn.closest('div.companies__content-footer-dropholder'),
                dropMenu = parent.querySelector('ul.companies__content-footer-dropmenu');
            oneBtn.classList.toggle('active'); 
                /*

                btn.classList.toggle('companies__content-footer-btn active')
                console.log('Has class')
                dropMenu.style.display = "none";
    
                if (companyDropBtn != null && companyDropMenus != null) {
                    companyDropBtn.forEach(element => {
                        if(element.classList.contains('active')) {
                            var parent = element.closest('div.companies__content-footer-dropholder'),
                                dropMenu = parent.querySelector('ul.companies__content-footer-dropmenu');
                            element.classList.remove('active');
                            dropMenu.style.display = "none";
                        }
                    })
                }
                dropMenu.style.display = 'block';

                */
        };
        
    });
}




function initDocumentEventListener() {
    document.addEventListener('mouseup', e => {
        companyDropMenus.forEach(oneMenu => {
            if (!oneMenu.contains(e.target)) {

            }
        })

        companyDropBtn.forEach(oneBtn => {
            if (oneBtn.classList.contains('active')) oneBtn.classList.remove('active')
        })

    }, false)
}


/*

$(document).mouseup(function (e) {
    var container = $("YOUR CONTAINER SELECTOR");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

*/