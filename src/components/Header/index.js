import {Link } from 'react-router-dom'
import './style.css'

function Header(){
    return(
        <header className='header-menu'>
            <Link className='home' to='/'>Home</Link>
            <Link className='sobre' to='/sobre'>Sobre</Link>
            <Link className='projeto' to='/projetos'>Projetos</Link>
            <Link className='contato' to='/contato'>Contato</Link>
        </header>
    )
    
}
export default Header;