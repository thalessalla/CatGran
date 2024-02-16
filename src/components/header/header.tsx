import "./header.css"
import { Link } from "react-router-dom"
import carrinho from "../../assets/shopping_cart.svg"
import cat from "../../assets/cat.svg"
import LogoutButton from "../logout/logout"
import { RootState } from "../../store/store"
import { useSelector } from 'react-redux';

function Header(){
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return(
     <>
     <div className="header">
      <div>
        <Link to="/">
          <img src={cat} alt="Ilustração vetorizada de um rosto de gato" />
        </Link>

        {isAuthenticated && <LogoutButton />} 

        {isAuthenticated && ( 
        <Link to="/carrinho">
          <img className="carrinho-icon" src={carrinho} alt="Carrinho" />
       </Link>
)}

        
        </div>
     </div>
     </>
  )
}

export default Header


