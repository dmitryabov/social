import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reduser';
import {Redirect} from 'react-router-dom'


const LoginForm = (props) => {
    return (
          <form onSubmit={props.handleSubmit}>
              <div>
                  <Field placeholder={'Email'} name={'email'} component={'input'}/>
              </div>
              <div>
                  <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
              </div>
              <div>
                  <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
              </div>
              {props.captchaUrl && <img src={props.captchaUrl} alt='captcha'/>}
              {props.captchaUrl && 
                <div>
                  <Field type={'input'} name={'captcha'} component={'input'}/> Symbols for image
                </div>
              }
              <div>
                  <button> Login</button>
              </div>
          </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    
   const onSubmit = (formData) => {
       props.login( formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

     
    if( props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
              <h1>Login</h1>
              <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
          </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, { login } )(Login) ;