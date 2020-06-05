class Validation extends React.Component {

    state = {
        data: {
            login: '',
            fullname: '',
            password: ''
        },
        errors: {
            login: true,
            fullname: true,
            password: true
        },
        passVisible: false,
        currentLocation: window.location.href.split('/')[3],
        notPassed: true
    }



    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const type = target.name;
        
        this.setState({
            data: Object.assign({}, this.state.data,{
                [type]: value
            })
        }, 
            () => {
                this.checkValid(type, value)
            }
        )
    }


    checkValid = (type, value) => {
        let regExp = {
          'fullname': /^[a-zA-Zа-яА-ЯЁ0-9\s]{3,100}$/,
          'login': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'password': /^[a-zA-Zа-яА-ЯЁё0-9!\-'/:();.,*_+=\s]{5,2000}$/
        }
    
        this.setState({
          errors: Object.assign({}, this.state.errors, {
            [type]: value.match(regExp[type]) ? true : false
          })
        }, () => {this.allowPassed()})
    }


    allowPassed = () => {
        let arr = this.getErrorArray();
        if (arr.includes(false) && this.checkForEmptiness()) {
            this.setState({
                notPassed: false
            })
        } else {  
            this.setState({
                notPassed: true
            })
        }
    }



    getDataArray = () => {
        let arr;
        if(this.state.currentLocation !== "login.html") {
            arr = Object.values({
                login: this.state.data.login,
                password: this.state.data.password
            })
        } else {
            arr = Object.values(this.state.data)
        }
        return arr;
    }


    getErrorArray = () => {
        let arr;
        if(this.state.currentLocation !== "login.html") {
            arr = Object.values({
                login: this.state.errors.login,
                password: this.state.errors.password
            })
        } else {
            arr = Object.values(this.state.errors)
        }
        return arr;
    }




    checkForEmptiness = () => {
        let arr, decision;
        arr = this.getDataArray();
        decision = arr.includes('') ? true : false;
        return decision
    }



    tryToSendForm = (e) => {
        let arrData = this.getDataArray(),
            arrError = this.getErrorArray();

        if (arrData.includes('')) {
            this.makeInputRed();
            e.preventDefault();
        }        

        if(arrError.includes(false)) {
            e.preventDefault();
        }

    }


    makeInputRed = () => {
        this.setState({
            errors: Object.assign({}, this.state.errors, {
                fullname: this.checkString(this.state.data.fullname) ? false : true,
                login: this.checkString(this.state.data.login) ? false : true,
                password: this.checkString(this.state.data.password) ? false : true
            })
        })
    }


    checkString = (value) => {
        return (value === '' || value.length === 0 || !value.trim()) ? true : false;
    }




    showPass = () => {
        this.setState(prevState => ({showPass: !prevState.showPass}))
    }




    render() {
        return (
            <div>

                <div className="login__window-input-holder">
                    <input
                        className="login__window-login"
                        id="login"
                        style={{borderColor: !this.state.errors.login ? '#DC143C' : '#f0f2f7'}}
                        name="login"
                        type="text" 
                        placeholder="Логин (email)"
                        value={this.state.data.login}
                        onChange={this.handleChange}
                    />
                </div>


                {this.state.currentLocation !== 'login.html' &&
                    <div className="login__window-input-holder">
                        <input 
                            class="login__window-login" 
                            id="fullname"
                            style={{borderColor: !this.state.errors.fullname ? '#DC143C' : '#f0f2f7'}}
                            name="fullname"
                            type="text" 
                            placeholder="Имя"
                            value={this.state.data.fullname}
                            onChange={this.handleChange}
                        />
                    </div>
                }


                <div className="login__window-input-holder">
                    <input 
                        className="login__window-password"
                        id="password"
                        style={{borderColor: !this.state.errors.password ? '#DC143C' : '#f0f2f7'}}
                        name="password"
                        type={this.state.showPass ? 'text' : 'password'}
                        autocomplete="on"
                        placeholder="Пароль"
                        value={this.state.data.password}
                        onChange={this.handleChange}
                    />
                    <span 
                        onClick={this.showPass} 
                        className="login__window-password-eye"
                        style={{backgroundImage: `url(/assets/images/icons/eyes${!this.state.showPass ? 'Off' : 'On'}.svg)`}}
                    ></span>
                </div>


                {this.state.currentLocation === 'login.html' &&
                    <div className="login__window-link-holder">
                        <a className="login__window-link" href="">Забыли пароль?</a>
                    </div>
                }


                <div className="login__window-holderbtn">
                    <button 
                        //disabled={!this.state.notPassed}
                        className="button button-blue login__window-btn"
                        onClick={this.tryToSendForm}
                    >
                        {this.state.currentLocation === 'login.html' ? 
                            'Войти' : 'Зарегистрироваться'} 
                    </button>
                </div>

            </div>
        );
    }
}

ReactDOM.render(<Validation />, document.getElementById('react-validation'));