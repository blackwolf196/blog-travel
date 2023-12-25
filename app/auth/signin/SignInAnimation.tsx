import {
  FacebookFilled,
  GoogleCircleFilled,
  LinkedinFilled,
} from '@ant-design/icons'
import { AuthTokenResponse } from '@supabase/gotrue-js'
import { Button, Form, Input, message } from 'antd'
import Styled from 'app/auth/signin/styled'
import { useSupabase } from 'app/supabase-provider'
import React, { useState } from 'react'

interface loggedProps {
  email: string
  password: string
}

const SignInAnimation: React.FC = () => {
  const { supabase } = useSupabase()
  const [form] = Form.useForm()
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false)

  const SignInWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  const SignInWithLinkedin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'linkedin',
    })
  }

  const SignInWithFacebook = () => {
    supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
  }

  const SignInWithEmail = () => {
    setLoadingLogin(true)
    form.validateFields().then(({ email, password }) => {
      supabase.auth
        .signInWithPassword({
          email,
          password,
        })
        .then((result: AuthTokenResponse) => {
          setLoadingLogin(false)
          if (result.error) {
            message.error(result.error.message)
          }
        })
    })
  }

  const FormLogin = (
    <Form
      form={form}
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      autoComplete={'off'}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      <Form.Item<loggedProps>
        name={'email'}
        rules={[
          { required: true, message: 'Please input your email' },
          { type: 'email', message: 'Email is not valid' },
        ]}
      >
        <Input placeholder={'Email'} />
      </Form.Item>
      <Form.Item<loggedProps>
        name={'password'}
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password placeholder={'Password'} />
      </Form.Item>
    </Form>
  )

  return (
    <Styled>
      <div className={`container ${isSignIn ? '' : 'right-panel-active'}`}>
        <div className="form-container sign-in-container">
          <div className={'form'}>
            <div className={'main-title'}>Sign in</div>
            <div className="social-container">
              <a className="social facebook" onClick={SignInWithFacebook}>
                <FacebookFilled className={'facebook'} />
              </a>
              <a className="social google" onClick={SignInWithGoogle}>
                <GoogleCircleFilled />
              </a>
              <a className="social linkedin" onClick={SignInWithLinkedin}>
                <LinkedinFilled />
              </a>
            </div>
            <span>or use your account</span>
            {FormLogin}
            <a href="#">Forgot your password?</a>
            <Button
              className={'btn-signin-form'}
              loading={loadingLogin}
              onClick={SignInWithEmail}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="form-container sign-up-container">
          <div className={'form'}>
            <div className={'main-title'}>Create Account</div>
            <div className="social-container">
              <a className="social facebook">
                <FacebookFilled />
              </a>
              <a className="social google">
                <GoogleCircleFilled />
              </a>
              <a className="social linkedin">
                <LinkedinFilled />
              </a>
            </div>
            <span>or use your email for registration</span>
            {FormLogin}
            <Button className={'btn-signin-form'}>Sign Up</Button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className={'welcome-text'}>Welcome Back!</div>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Button
                className={'btn-signup'}
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </Button>
            </div>
            <div className="overlay-panel overlay-right">
              <div className={'welcome-text'}>{`Don't have account ?`}</div>
              <p>Create your account right here and start journey with us</p>
              <Button
                className={'btn-signup'}
                id="signUp"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default SignInAnimation
