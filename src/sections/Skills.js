import React, {Component} from 'react';
import Skill from '../components/Skill';
import { FaAngular, FaReact, FaHtml5, FaCss3, FaGithub, FaNodeJs, FaJs } from "react-icons/fa";
import Azure from '../../src/assets/images/Azure.png';
import Csharp  from '../../src/assets/images/Csharp.png';
import Dotnet from '../../src/assets/images/Dotnet.jpg';
import IIS from '../../src/assets/images/IIS.jpg';
import SQL from '../../src/assets/images/SQL.jpg';

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            skills: [
                {
                    title:'C#',
                    logo: Csharp,
                    isReactIcon: false,
                    color: ''
                },
                {
                    title:'.NET',
                    logo: Dotnet,
                    isReactIcon: false,
                    color: ''
                },
                {
                    title:'Javascipt',
                    logo: <FaJs></FaJs>,
                    isReactIcon: true,
                    color: '#f0db4f'
                },
                {
                    title:'Angular',
                    logo: <FaAngular></FaAngular>,
                    isReactIcon: true,
                    color: '#d13438'
                },
                {
                    title:'React',
                    logo: <FaReact></FaReact>,
                    isReactIcon: true,
                    color: '#61dafb'
                },
                {
                    title:'HTML',
                    logo: <FaHtml5></FaHtml5>,
                    isReactIcon: true,
                    color: '#e34f26'
                },
                {
                    title:'CSS',
                    logo: <FaCss3></FaCss3>,
                    isReactIcon: true,
                    color: '#0645ad' 
                },
                {
                    title:'SQL',
                    logo: SQL,
                    isReactIcon: false,
                    color: '' 
                },
                {
                    title:'Azure',
                    logo: Azure,
                    isReactIcon: false,
                    color: '' 
                },
                {
                    title:'Git',
                    logo: <FaGithub></FaGithub>,
                    isReactIcon: true,
                    color: '#6e5494'
                },
                {
                    title:'Node.js',
                    logo: <FaNodeJs></FaNodeJs>,
                    isReactIcon: true,
                    color: '#026e00'
                },
                {
                    title:'IIS',
                    logo: IIS,
                    isReactIcon: false,
                    color: '' 
                }
            ]
        }
    }
    render() {
        return(
            <section id="skills" className="container">
                <h1>Skills</h1>
                {
                    this.state.skills.map((skill, index)=> {
                        return(
                          <Skill skill={skill} key={index}></Skill>  
                        )
                    })
                }
            </section>
        )
    }
}

export default Skills;