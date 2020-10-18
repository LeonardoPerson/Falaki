import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './auth'
import UserInfo from './UserInfo'

const Header = () => {
    const auth = useContext(AuthContext)
    
    return(
        <div className='header-container'> 

            <img src='../logo3.png' className='header-logo' alt='logo-falaki'/>   
            <div className='vazio'></div> 
            {
            auth.user === null?

            <div className='header-menu1'>
                <Link to='/login' className='link'>
                    <button className='botao-entrar'>
                        ENTRAR
                    </button>
                </Link>  
                <Link to='/create' className='link'>
                    <button className='botao-criar'>
                        CRIAR CONTA
                    </button>
                </Link>
            </div>     

            : 

            <div>
                <UserInfo/>
            </div>                
            }          
                 
        </div>
    )
}

export default Header