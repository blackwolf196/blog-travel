import {
  FacebookFilled,
  GooglePlusCircleFilled,
  LinkedinFilled,
} from '@ant-design/icons'
import { Input } from 'antd'
import Styled from 'app/auth/signin/styled'
import { useSupabase } from 'app/supabase-provider'
import React, { useState } from 'react'

const SignInAnimation: React.FC = () => {
  const { supabase } = useSupabase()
  const [isSignIn, setIsSignIn] = useState<boolean>(true)

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
    supabase.auth.signInWithPassword({
      email: '',
      password: '',
    })
  }

  return (
    <Styled>
      <div className={`container ${isSignIn ? '' : 'right-panel-active'}`}>
        <div className="form-container sign-up-container">
          <div className={'form'}>
            <div className={'main-title'}>Create Account</div>
            <div className="social-container">
              <a className="social">
                <FacebookFilled />
              </a>
              <a className="social">
                <GooglePlusCircleFilled />
              </a>
              <a className="social">
                <LinkedinFilled />
              </a>
            </div>
            <span>or use your email for registration</span>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className={'form'}>
            <div className={'main-title'}>Sign in</div>
            <div className="social-container">
              <a className="social" onClick={SignInWithFacebook}>
                <FacebookFilled />
              </a>
              <a className="social" onClick={SignInWithGoogle}>
                <GooglePlusCircleFilled />
              </a>
              <a className="social" onClick={SignInWithLinkedin}>
                <LinkedinFilled />
              </a>
            </div>
            <span>or use your account</span>
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className={'welcome-text'}>Welcome Back!</div>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <div className={'welcome-text'}>Hello, Friend!</div>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default SignInAnimation
