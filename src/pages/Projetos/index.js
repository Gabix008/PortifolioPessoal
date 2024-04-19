import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import './style.css'
import foto from'../../imagens/foto.jpeg';
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import biscoitoDaSorte from'../../imagens/biscoitoDaSorte.png';
import cronometro from'../../imagens/cronometro.png';
import orcamentoPessoal from '../../imagens/orcamentoPessoal.png';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


function Projetos(){
    return(
        <div className='body-projetos'>
            <div className='conteudo-projeto'>
                <Header className='menu'/>
                {/* <div className='icones1'>
                    <a target='_blank' rel='external' href={`https://linkedin.com/in/gabriellysbarbosa`}><FiLinkedin  size={25}  color='#DB85FA'/> </a>
                    <a target='_blank' rel='external' href={`https://github.com/Gabix008`}><RiGithubLine  size={25} color='#DB85FA'/></a>
                    <a target='_blank' rel='external ' href= 'https://mail.google.com/mail/u/1/?pli=1#inbox?compose=newmailto:gabriellysantana583@gmail.com'><MdAlternateEmail  size={25} color='#DB85FA'/></a>
                </div> */}
                
                <div className='container'>
                    <div className='projeto1'>
                        <h3>Biscoito da Sorte</h3>
                        <img src={biscoitoDaSorte}/>
                       <div className='icones-linguagens1'>
                       <FaReact size={35} color='#00D8FF'/> <FaHtml5 size={35} color='#E44F26'/> <FaCss3Alt size={35} color='#0277BD'/>
                        </div> 

                        <p>O projeto "Biscoito da Sorte" é uma aplicação web feita em React, HTML e CSS como parte de um curso da Udemy. React foi usado para construir a interface do usuário e gerenciar o estado da aplicação. HTML estruturou o layout, incluindo a exibição da mensagem do "biscoito da sorte" e o botão para gerar uma nova mensagem. CSS foi usado para estilizar e animar a aplicação. Este projeto ajudou os alunos a aplicar seus conhecimentos de React, HTML e CSS, e a entender o gerenciamento de estado e ciclo de vida em React.</p>
                        <a target='blank' rel='external' href='https://github.com/Gabix008/Biscoito-da-Sorte' className='git-projeto1'><FaGithub style={{marginLeft:10}} color='#ffff'/> GitHub </a>
                        <a target='blank' rel='external' href='https://github.com/Gabix008/Biscoito-da-Sorte' className='deploy-projeto1'><GrView style={{marginLeft:10}} color='#ffff'/> Deploy</a>

                    </div>
                    
                    <div className='projeto2'>
                        <h3>Cronometro</h3>
                        <img src={cronometro} />
                        <div className='icones-linguagens2'>
                        <FaHtml5 size={35} color='#E44F26'/> <FaCss3Alt size={35} color='#0277BD' /> <IoLogoJavascript  size={35} color='#F0DB4F' />
                        </div> 
                        <p>O projeto é um cronômetro interativo feito em JavaScript, HTML e CSS como parte de um curso da Udemy. JavaScript foi usado para construir a interface do usuário e gerenciar o estado do cronômetro. HTML estruturou o layout, incluindo a exibição do tempo e os botões de controle. CSS foi usado para estilizar e animar a aplicação. Este projeto ajudou os alunos a aplicar seus conhecimentos de JavaScript, HTML e CSS.</p>
                        <a target='blank' rel='external' href='https://github.com/Gabix008/App-cronometro' className='git-projeto2'><FaGithub color='#ffff'/> GitHub</a>
                        <a target='blank' rel='external' href='https://github.com/Gabix008/App-cronometro' className='deploy-projeto2'><GrView color='#ffff'/> Deploy</a>
                    </div>
                    
                    <div className='projeto3'>
                        <h3>Orçamento pessoal</h3>
                        <img src={orcamentoPessoal}/>
                        <div className='icones-linguagens3'>
                        <FaHtml5 size={35} color='#E44F26'/>  <IoLogoJavascript  size={35} color='#F0DB4F' />
                        </div> 
                        <p>O projeto de orçamento pessoal é uma aplicação web feita em HTML e JavaScript como parte de um curso da Udemy. Ele permite aos usuários rastrear suas receitas e despesas, fornecendo uma visão clara de sua situação financeira. HTML estrutura a interface do usuário, enquanto JavaScript adiciona interatividade e funcionalidade à aplicação.</p>
                        <a target='blank' rel='external' href='https://github.com/Gabix008/ProjetoOrcamentoPessoal' className='git-projeto3'><FaGithub color='#ffff'/> GitHub</a>
                        <a target='blank' rel='external' href='https://github.com/Gabix008/ProjetoOrcamentoPessoal' className='deploy-projeto3'><GrView color='#ffff'/> Deploy</a>
                    </div> 
                    </div>
                
                
            
            </div>

        </div>
    )
}
export default Projetos;