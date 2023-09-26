import React from 'react'
import FormInput from '../../../components/FormInput/FormInput'
import './LogIn.css'

export default function LogIn() {
  return (
    <>
    <div className='signIn'>
      <form>
        <FormInput placeholder="Email" />
        <FormInput placeholder="Password" />
      </form>
    </div>
        
    </>
  )
}
