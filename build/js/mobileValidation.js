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
            'contact[email]' : '',
            'contact[phone]' : '',
            'text' : ''
        }
    }



    initElementsForm () {
        this.mobileStars = document.querySelector('.mobile__stars');
        this.mobileTextarea = document.querySelector('.mobile__textarea');
        this.mobileNpsRate = document.querySelector('.mobile__nps-rate');
        this.dataFields = document.querySelectorAll('.fieldValidate');
        this.sendBtn = document.querySelector('.mobile__send-btn');

        if(this.dataFields && this.sendBtn && this.mobileTextarea) {

            this.dataFields.forEach(field => {
                field.oninput = e => {this.checkInputValue(e)}
            });
            this.mobileTextarea.oninput = e => {this.checkInputValue(e)}
            this.sendBtn.onclick = e => {this.checkEmptiness(e)};

        }
    }



    checkInputValue (input) {
        let value = input.target.value,
            target = input.target.name;


        if(value.match(this.regExps[target])) {
            console.log('Прошел')
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
            let div = document.createElement('div');
                div.className = "mobile__field-error";
                div.innerHTML = "Необходимо отметить NPS!";
            this.mobileNpsRate.append(div);
        }

        if(!this.mobileStars.querySelector('input:checked')) {
            e.preventDefault();
            let div = document.createElement('div');
                div.className = "mobile__field-error";
                div.innerHTML = "Необходимо оставить оценку!";
            this.mobileStars.insertAfter(div);
        }
    }


}

new MobileValidation;