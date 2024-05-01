// IMPORTS
import { Link } from 'react-router-dom'

import '../sass/_header.scss';
import Account from '../components/Account'

import Logo from '../img/argentBankLogo.webp'



function Header() {
   return (
      <header>
         <nav className='cont-nav'>

            <Link to="/">
               <img className='logo-header' alt='Logo de Argent Bank' src={Logo} />
            </Link>

            <Account />

         </nav>
      </header>
   )
}
 
export default Header