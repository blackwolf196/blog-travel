'use client'

import { useSupabase } from '@/provider/supabase-provider'
import { MailOutlined } from '@ant-design/icons'
import { Form, Input, message } from 'antd'
import ChangeStyled from 'app/auth/change/change.styled'
import Button from 'app/auth/components/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface forgotProps {
  email: string
}

const ForgotPassword = () => {
  const [formForgot] = Form.useForm<forgotProps>()
  const { supabase } = useSupabase()
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const handleKeyDownForgot = (e: any) => {
    if (e.key === 'Enter') {
      submitForgot()
    }
  }

  const submitForgot = () => {
    formForgot.validateFields().then(async ({ email }) => {
      setLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/auth/callback',
      })
      setLoading(false)
      if (error) {
        message.error(error.toString())
      } else {
        message.success(
          'Email has been sent. Please check inbox and follow to get your new password!'
        )
      }
    })
  }

  const backToLogin = () => {
    router.push('/auth/in')
  }

  return (
    <ChangeStyled>
      <div className={'forgot-container'}>
        <div className={'forgot-line'}>Forgot your password ?</div>
        <div className={'email-line'}>Enter your email address</div>
        <div className={'input-zone'}>
          <Form form={formForgot} onKeyDown={handleKeyDownForgot}>
            <Form.Item<forgotProps>
              name={'email'}
              rules={[
                { required: true, message: 'Please input your email' },
                { type: 'email', message: 'Email is not valid' },
              ]}
            >
              <Input
                className={'input-email'}
                prefix={<MailOutlined />}
                placeholder={'Enter your email'}
              />
            </Form.Item>
          </Form>
          <Button
            loading={loading}
            block
            className={'btn-submit-forgot btn-primary'}
            onClick={submitForgot}
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
