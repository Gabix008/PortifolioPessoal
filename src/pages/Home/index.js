import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import './style.css'
import foto from'../../imagens/foto.jpeg';
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";


function Home(){
    return(
        <div className='body-home'>
            <div className='meio'>  
            <Header />
                <div className='textos'>
                <h1>Olá,</h1>
                <h2>eu sou a Gabrielly!</h2>
                </div>
               
                <img src={foto} className='imagem'/>

            </div> 
        </div>
        
    )
}
export default Home;


                {/* <div className='icone'>
                    <a target='_blank' rel='external' href={`https://linkedin.com/in/gabriellysbarbosa`}><FiLinkedin className='icone1' size={27}  color='#DB85FA'/> </a>
                    <a target='_blank' rel='external' href={`https://github.com/Gabix008`}><RiGithubLine className='icone2' size={27} color='#DB85FA'/></a>
                    <a target='_blank' rel='external ' href= 'https://mail.google.com/mail/u/1/?pli=1#inbox?compose=newmailto:gabriellysantana583@gmail.com'><MdAlternateEmail className='icone3' size={27} color='#DB85FA'/></a>
                </div> */}