import { useSupabase } from '@/provider/supabase-provider'
import {
  FacebookFilled,
  GoogleCircleFilled,
  LinkedinFilled,
  MailOutlined,
} from '@ant-design/icons'
import { AuthTokenResponse } from '@supabase/gotrue-js'
import { Button, Form, Input, message } from 'antd'
import Styled from 'app/auth/in/styled'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

interface loggedProps {
  email: string
  password: string
}

const SignInAnimation: React.FC = () => {
  const { supabase } = useSupabase()
  const [formIn] = Form.useForm<loggedProps>()
  const [formUp] = Form.useForm<loggedProps>()
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false)

  useEffect(() => {
    if (isSignIn) {
      formIn.resetFields()
    } else {
      formUp.resetFields()
    }
  }, [isSignIn])

  const timeSpamp = dayjs().format('YYYYMMDDhhmmssSSS')

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
    formIn.validateFields().then(({ email, password }) => {
      setLoadingLogin(true)
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

  const FormLogin = () => {
    const rulesPassword: any[] = [
      { required: true, message: 'Please input your password' },
    ]

    return (
      <Form
        form={formIn}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
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
          <Input
            placeholder={'Email'}
            name={`email-in-not-fill-${timeSpamp}`}
            autoComplete={'one-time-code'}
            suffix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item<loggedProps> name={'password'} rules={rulesPassword}>
          <Input.Password
            placeholder={'Password'}
            name={`pwd-in-not-fill-${timeSpamp}`}
            autoComplete={'one-time-code'}
          />
        </Form.Item>
      </Form>
    )
  }

  const FormSignUp = () => {
    const rulesPassword: any[] = [
      { required: true, message: 'Please input your password' },
      {
        pattern: '(?=.*[A-Z])(?=.*\\d).{8,}$',
        message:
          'Password must be at least 8 characters, with at least 1 UPPERCASE and 1 number.',
      },
    ]
    return (
      <Form
        form={formUp}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        autoComplete={'one-time-code'}
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
          <Input
            placeholder={'Email'}
            name={`email-up-not-fill-${timeSpamp}`}
            autoComplete={'one-time-code'}
            suffix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item<loggedProps> name={'password'} rules={rulesPassword}>
          <Input.Password
            name={`pwd-up-not-fill-${timeSpamp}`}
            placeholder={'Password'}
            autoComplete={'one-time-code'}
          />
        </Form.Item>
      </Form>
    )
  }

  return (
    <Styled>
      <div className={`container ${isSignIn ? '' : 'right-panel-active'}`}>
        <div className="form-container sign-in-container">
          <div className={'form'}>
            <div className={'main-title'}>Sign in</div>
            {/*<div className="social-container">*/}
            {/*  <a className="social facebook" onClick={SignInWithFacebook}>*/}
            {/*    <FacebookFilled className={'facebook'} />*/}
            {/*  </a>*/}
            {/*  <a className="social google" onClick={SignInWithGoogle}>*/}
            {/*    <GoogleCircleFilled />*/}
            {/*  </a>*/}
            {/*  <a className="social linkedin" onClick={SignInWithLinkedin}>*/}
            {/*    <LinkedinFilled />*/}
            {/*  </a>*/}
            {/*</div>*/}
            {/*<span>or use your account</span>*/}
            {FormLogin()}
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
            {/*<div className="social-container">*/}
            {/*  <a className="social facebook">*/}
            {/*    <FacebookFilled />*/}
            {/*  </a>*/}
            {/*  <a className="social google">*/}
            {/*    <GoogleCircleFilled />*/}
            {/*  </a>*/}
            {/*  <a className="social linkedin">*/}
            {/*    <LinkedinFilled />*/}
            {/*  </a>*/}
            {/*</div>*/}
            {/*<span>or use your email for registration</span>*/}
            {FormSignUp()}
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
