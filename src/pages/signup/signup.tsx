import React, { useState } from 'react'
import { useRegisterMutation } from '../../slices/loginSlice'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./signup.css"

export const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [register, { isLoading }] = useRegisterMutation()
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      const response = await register({ email, password }).unwrap()
      setShowSuccess(true)
      navigate('/')
    } catch (error) {
      setShowError(true)
    }
  }

  return (
    <section className='section-singup'>
    <form onSubmit={onSubmit}>
      <h1>Cadastre-se</h1>
      {showSuccess && <Alert severity="success">Cadastro bem-sucedido!</Alert>}
      {showError && <Alert severity="error">Erro no cadastro!</Alert>}
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
        Cadastre-se
      </button>
      <p>Já tem uma conta?  <strong> <Link to="/">Faça o login!</Link> </strong></p>
    </form>
    </section>
  )
}