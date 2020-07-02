class MobileValidation {

    mobileStars;
    mobileTextarea;
    mobileNpsRate;
    dataFields;
    sendBtn;
    regExps;
    


    constructor() {
        this.initElementsForm();
        this.regExps = {
            'contact[name]' : /^[а-яё ]{2,30}$/iu,
            'contact[email]' : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'contact[phone]' : /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- \s]?)?[\d\- ]{7,10}$/,
            'comment' : /^[а-яё0-9!-., ]{1,300}$/i
        }
    }



    initElementsForm () {
        this.mobileStars = document.querySelector('.mobile__stars-container');
        this.mobileTextarea = document.querySelector('.mobile__textarea');
        this.mobileNpsRate = document.querySelector('.mobile__nps-rate');
        this.dataFields = document.querySelectorAll('.fieldValidate');
        this.sendBtn = document.querySelector('.mobile__send-btn');

        if(this.dataFields && this.sendBtn && this.mobileTextarea) {

            this.dataFields.forEach(field => {
                if(field.name === 'contact[age]') {
                    let hiddenInput = field.closest('.mobile__userinfo-input-holder').querySelector('.mobile__userinfo-hidden-input');
                    hiddenInput.oninput = e => {
                        field.style.border = 0
                    }
                } else {
                    if(field.name === 'contact[phone]'){
                        field.onkeyup = e => {this.checkInputValue(e)}
                    } else {
                        field.oninput = e => {this.checkInputValue(e)}
                    }
                }
            });
            this.mobileTextarea.oninput = e => {this.checkInputValue(e)}
            this.sendBtn.onclick = e => {this.checkEmptiness(e)};
            this.sendBtn.ontouchstart = e => {this.checkEmptiness(e)};

            this.mobileStars.onclick = e => {this.removeError(e)};
            this.mobileNpsRate.onclick = e => {this.removeError(e)};


        }
    }



    removeError (e) {
        let parent = e.target.closest('.mobile__stars-container'),
            errorEl = parent.querySelector('.mobile__field-error');
        if(errorEl) {
            errorEl.remove();
        }
    }


    checkInputValue (input) {
        let value = input.target.value,
            target = input.target.name;
            
            
        console.log(value)


        if(target === 'contact[name]') {
            value = value.split(/\s{2,}/g).join(" ");
            input.target.value = value;
        }
        
        if(value.match(this.regExps[target])) {
            this.deleteError(input.target)
        } else {
            this.addFieldError(input.target)
        }
    }



    addFieldError (target) {
        if(!target.closest('.mobile__userinfo-input-holder').querySelector('.mobile__field-error')) {    
            let div = document.createElement('div');
                div.className = "mobile__field-error";
            switch (target.name) {
                case 'contact[name]':
                    div.innerHTML = "Поле ФИО заполнено некорректно!";
                    break;
                case 'contact[email]':
                    div.innerHTML = "Адрес введен некорректно!";
                    break;
                case 'contact[phone]':
                    div.innerHTML = "Номер телефона введен некорректно!";
                    break;
                case 'comment':
                    div.innerHTML = "Сообщение введено некорректно!";
                    break;
                default:
                    console.log('Полей нет')
            }
            target.after(div)
        }
        target.style.border = '1px solid red';
    }



    deleteError (target) {
        let error = target.closest('.mobile__userinfo-input-holder').querySelector('.mobile__field-error'); 
        if(error) {    
            error.remove()
        }
        target.style.border = 0;
    }




    findShowSomeErrors(e) {
        let form = document.querySelector('#sendRating'),
            someError = form.querySelector('.mobile__field-error');

        if(someError) {
            someError.scrollIntoView({block: "center", behavior: "smooth"});
            e.preventDefault();
        }

        if(this.mobileTextarea.value === '' && this.mobileTextarea.value.length === 0) {
            this.mobileTextarea.scrollIntoView({block: "center", behavior: "smooth"});
            e.preventDefault();
        }
    }



    checkEmptiness (e) {
        this.dataFields.forEach(field => {
            if(field.value === '' && field.value.length === 0) {
                e.preventDefault();
                field.style.border = '1px solid red';
            }
        })

        if(this.mobileTextarea.value === '' && this.mobileTextarea.value.length === 0) {
            e.preventDefault();
            this.mobileTextarea.style.border = '1px solid red';
        }

        if(!this.mobileNpsRate.querySelector('input:checked')) {
            e.preventDefault();
            if(!this.mobileNpsRate.querySelector('.mobile__field-error')){
                let div = document.createElement('div');
                    div.className = "mobile__field-error";
                    div.innerHTML = "Необходимо дать оценку!";
                this.mobileNpsRate.append(div);
            }
        }

        if(!this.mobileStars.querySelector('input:checked')) {
            e.preventDefault();
            if(!this.mobileStars.querySelector('.mobile__field-error')){
                let div = document.createElement('div');
                    div.className = "mobile__field-error";
                    div.innerHTML = "Необходимо оставить оценку!";
                this.mobileStars.append(div);
            }
        }

        this.findShowSomeErrors(e)

    }
}

new MobileValidation;