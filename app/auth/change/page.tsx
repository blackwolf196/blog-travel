'use client'

import { useSupabase } from '@/provider/supabase-provider'
import { LockOutlined } from '@ant-design/icons'
import { Form, Input, message } from 'antd'
import ChangeStyled from 'app/auth/change/change.styled'
import Button from 'app/auth/components/button'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'

interface changeProps {
  password: string
}

const ForgotPassword = () => {
  const [formChange] = Form.useForm<changeProps>()
  const {
    supabase,
    session,
    setAppState,
    appState: { isAuthenticated },
  } = useSupabase()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      submitChangePassword()
    }
  }

  const submitChangePassword = () => {
    formChange.validateFields().then(({ password }) => {
      supabase.auth
        .updateUser({
          password,
        })
        .then(() => backToLogin())
    })
  }

  const backToLogin = () => {
    supabase.auth.signOut().then(() => {
      setAppState({
        isAuthenticated: false,
        isInitialized: true,
      })
      router.push('/auth/in')
    })
  }

  // if (!isAuthenticated) {
  //   redirect('/auth/in')
  // }

  return (
    <ChangeStyled>
      <div className={'change-container'}>
        {session ? (
          <div className={'email'}>Hi, {session?.user?.email}</div>
        ) : null}
        <div className={'change-line'}>Enter your new password</div>
        <div className={'input-zone'}>
          <Form form={formChange} onKeyDown={handleKeyDown}>
            <Form.Item<changeProps>
              name={'password'}
              rules={[
                { required: true, message: 'Please input your password' },
                {
                  pattern: /(?=.*[A-Z])(?=.*\\d).{8,}$/,
                  message:
                    'Password must be at least 8 characters, with at least 1 UPPERCASE and 1 number.',
                },
              ]}
            >
              <Input.Password
                className={'input-password'}
                prefix={<LockOutlined />}
                placeholder={
                  'Minimum 8 characters, at least 1 UPPERCASE and 1 number'
                }
              />
            </Form.Item>
          </Form>
          <Button
            loading={loading}
            block
            className={'btn-submit-change btn-primary'}
            onClick={submitChangePassword}
          >
            Submit
          </Button>
          <div className={'back-to-login'} onClick={backToLogin}>
            Remember your password ? Click here to login
          </div>
        </div>
      </div>
    </ChangeStyled>
  )
}

export default ForgotPassword
