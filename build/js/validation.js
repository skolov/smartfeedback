class Validation extends React.Component {


    state = {
        data: {
            login: '',
            fullname: '',
            password: ''
        },
        errors: {
            login: false,
            fullname: false,
            password: false
        },
        passVisible: false,
        currentLocation: window.location.href.split('/')[3],
        notPassed: false
    }



    handleChange = e => {
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
          'fullname': /^[a-zA-Zа-яА-ЯЁ0-9\s]{3,100}$/, // eslint-disable-next-line
          'login': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-next-line
          'password': /^[a-zA-Zа-яА-ЯЁё0-9!\-'/:();.,*_+=\s]{5,2000}$/ // eslint-disable-next-line
        }
    
        this.setState({
          errors: Object.assign({}, this.state.errors, {
            [type]: value.match(regExp[type]) ? true : false
          })
        }, () => {this.allowPassed()})
    }


    allowPassed = () => {
        let arr;

        if (this.state.currentLocation === 'login.html') {
            let obj = {
                login: this.state.errors.login,
                password: this.state.errors.password
            }
            arr = Object.values(obj)
        } else {
            arr = Object.values(this.state.errors)
        }
        
        this.setState({
            notPassed: arr.includes(false) ? false : true
        }, () => {
            console.log(this.state)
        })
    }


    /*checkForEmptiness = () => {
        let arr = Object.values(this.state.data),
            decision = arr.includes('') ? true : false;
        this.setState({notPassed: decision});
      }
*/

    showPass = () => {
        this.setState(prevState => ({showPass: !prevState.showPass}))
    }




    render() {
        return (
            <div>

                <div className="login__window-input-holder">
                    <input
                        className="input login__window-login"
                        id="login"
                        //style={{backgroundColor: this.state.isValid ? '' : 'red'}}
                        name="login"   
                        type="text" 
                        placeholder="Логин (email)"
                        value={this.state.data.email}
                        onChange={this.handleChange}
                    />
                </div>


                {this.state.currentLocation !== 'login.html' &&
                    <div className="login__window-input-holder">
                        <input 
                            class="input login__window-login" 
                            id="fullname"
                            name="fullname"
                            type="text" 
                            placeholder="Имя"
                            value={this.state.loginValue}
                            onChange={this.handleChange}
                        />
                    </div>
                }


                <div className="login__window-input-holder">
                    <input 
                        className="input login__window-password"
                        id="password"
                        name="password"
                        type={this.state.showPass ? 'text' : 'password'}
                        autocomplete="on"
                        placeholder="Пароль"
                        value={this.state.loginValue}
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
                        disabled={!this.state.notPassed}  
                        className="button button-blue login__window-btn"
                        style={{backgroundColor: this.state.notPassed ? '#4e94ca' : '#ccc'}}
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