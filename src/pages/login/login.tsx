import React, { useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../../slices/loginSlice'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import "./login.css"



export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { isLoading }] = useLoginMutation()
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      const response = await login({ email, password }).unwrap()
      localStorage.setItem('token', response.token)
      localStorage.setItem('username', response.username);
      setShowSuccess(true)
      navigate('/userPage')
    } catch (error) {
      setShowError(true)
    }
  }





  return (
    <section className='section-login'>
      
    <form onSubmit={onSubmit}>
    <h1>Login</h1>
      {showSuccess && <Alert severity="success">Login bem-sucedido!</Alert>}
      {showError && <Alert severity="error">Erro no login!</Alert>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit" disabled={isLoading}>
        Login
      </button>
      <p>Se você ainda não tem  uma conta, <Link to="/cadastrar"><strong>cadastre-se aqui.</strong></Link> </p>
    </form>
    </section>
  )
}

