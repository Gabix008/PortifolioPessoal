import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import './style.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LiaStreetViewSolid } from "react-icons/lia";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";


function Contato(){
    return(
        <div className='body-contato'>
            <div className='conteudo-contato'>  
            <Header />
            <form action='https://api.staticforms.xyz/submit' method='post' className='formulario'>
                <input type="hidden" name="accessKey" value="ba11dff9-4393-498b-b877-55944e8bed02"/>
                <label>Nome</label> 
                <input type='text' name='name' placeholder='Digite o seu nome' autoComplete='off' className='input-name'required></input>
                <label>Email</label>
                <input type='text' name='email' placeholder='Digite o seu email' autoComplete='off' className='input-email' required></input>
                <label>Mensagem</label>
                <input type='text' name='message' placeholder='Digite a sua mensagem' autoComplete='off' className='input-message' required></input>
                <input type="hidden" name="redirectTo" value="http://localhost:3000/contato"></input>
                <button type='submit' className='enviar'>Enviar</button>
            </form>
    </div>
    
        </div>
        
    )
}
export default Contato;

{/* <div className='contato-icon'>
                <FaWhatsapp size={25}/> <p>(62) 99108-2454</p> 
                </div>

                <div className='email-icon'>
                <MdOutlineAlternateEmail size={25}/><p>gabriellysantana583@gmail.com </p>
                </div>

                <div className='endereco-icon'>
                <LiaStreetViewSolid size={25}/><p>Rua Tal qd 10 lote 150</p>
                </div>  */}