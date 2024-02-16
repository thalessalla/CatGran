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



// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate()

//   const [login, { isLoading: isLoggingIn }] = useLoginMutation();
//   const [register, { isLoading: isRegistering }] = useRegisterMutation();

//   const handleLogin = async () => {
//     try {
//       const response = await login({ email, password }).unwrap();
//       console.log('Login successful:', response);
//       navigate('/userPage')
//     } catch (error) {
//       console.error('Login failed:', error);
//       alert("Erro ao logar. Verifique login e senha!")
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await register({ email, password }).unwrap();
//       console.log('Registration successful:', response);
//       // Lógica para lidar com o registro bem-sucedido, como redirecionamento para outra página
//     } catch (error) {
//       console.error('Registration failed:', error);
//       // Lógica para lidar com falhas de registro, como exibir uma mensagem de erro para o usuário
//     }
//   };




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
        placeholder="Senha"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" disabled={isLoading}>
        Login
      </button>
      <p>Se você ainda não tem  uma conta, <Link to="/cadastrar"><strong>cadastre-se aqui.</strong></Link> </p>
    </form>
    </section>
  )
}

// return (
//   <section className='section-login'>
//   <div>
//   <h1>Login</h1>
//     <input
//       type="email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       placeholder="Email"
//     />
//     <input
//       type="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       placeholder="Senha"
//     />
//     <button onClick={handleLogin} disabled={isLoggingIn}>
//       {isLoggingIn ? 'Logando...' : 'Login'}
//     </button>
//     <button onClick={handleRegister} disabled={isRegistering}>
//       {isRegistering ? 'Registering...' : 'Register'}
//     </button>
//   </div>
//   </section>
// );
// }

// export default Login;