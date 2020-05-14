class Main {

    constructor() {
        this.initToggleEyeButton();
        this.initToggleProfileMenu();
        this.initCompanyDropdownMenu();
        this.initTabsReview();
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
                        console.log(id)
                        tabsPage.style.display = "none";
                        element.classList.remove('active')

                    })

                    element.classList.add('active');

                    let currentTabId = element.getAttribute('id');
                    console.log(currentTabId)
                    document.getElementById(`tab-${currentTabId}`).style.display = "block";
                    console.log(document.getElementById(`tab-${currentTabId}`))
                    

                }
            })
        }
    }
}

new Main()


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
              companyDropBtn.forEach(element => {
                if(element.classList.contains('active')) {
                  var parent = element.closest('div.companies__content-footer-dropholder'),
                      dropMenu = parent.querySelector('ul.companies__content-footer-dropmenu');
                    element.classList.remove('active');
                    dropMenu.style.display = "none";    
                }
              })
            }
            btn.classList.add('active');
            dropMenu.style.display = "block";
          }
        };
      });
    }