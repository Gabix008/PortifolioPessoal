import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import './style.css'
import foto from'../../imagens/foto.jpeg';
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";


function Sobre(){
    return(
        <div className='body-sobre'>
         <div className='conteudo'>
            <Header /> 
            <h1>Desenvolvedora front-end</h1>
            <div className='icones'>
                    <a target='_blank' rel='external' href={`https://linkedin.com/in/gabriellysbarbosa`}><FiLinkedin  size={25}  color='#DB85FA'/> </a>
                    <a target='_blank' rel='external' href={`https://github.com/Gabix008`}><RiGithubLine  size={25} color='#DB85FA'/></a>
                    <a target='_blank' rel='external ' href= 'https://mail.google.com/mail/u/1/?pli=1#inbox?compose=newmailto:gabriellysantana583@gmail.com'><MdAlternateEmail  size={25} color='#DB85FA'/></a>
            </div>
            <h2>Sobre mim</h2> <br/>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            
        </div>
    )
}
export default Sobre;