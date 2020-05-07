class Main {

    constructor() {
        this.initToggleEyeButton();
        this.initToggleProfileMenu();
    }

    initToggleEyeButton(){
        let eyeButton = document.querySelector('.login__window-password-eye'),
            passwInput = null,
            toggleFlag = true;

        if(eyeButton != null) {
            passwInput = eyeButton.previousSibling.previousSibling;

            eyeButton.onclick = () => {
                if (toggleFlag) {
                    eyeButton.style.background = "url(/images/icons/eyesOn.svg)";
                    passwInput.setAttribute('type', 'text');
                } else {
                    eyeButton.style.background = "url(/images/icons/eyesOff.svg)";
                    passwInput.setAttribute('type', 'password');
                }
                toggleFlag = !toggleFlag;
            }
        }
        
    }


    initToggleProfileMenu() {
        let dropProfileMenu = document.querySelector('a.profile-menu'),
            dropButton = null,
            dropMenu = null;

        console.log(dropProfileMenu)

        if(dropProfileMenu != null) {
            dropButton = document.querySelector('img.profile-menu'),
            dropMenu = document.querySelector('ul.profile-menu');
            toggleFlag = true;
        }
        
        console.log(dropButton)
        console.log(dropMenu)

        if(dropButton != null && dropMenu != null) {
            dropProfileMenu.onclick = (e) => {
                e.preventDefault();
                if (toggleFlag) {
                    dropMenu.style.display = "block";
                    dropButton.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
                } else {
                    dropMenu.style.display = "none";
                    dropButton.style.transform = "matrix(1, 0, 0, -1, 0, 0)";
                }
                toggleFlag = !toggleFlag;
            }
        }
    }

}

new Main()