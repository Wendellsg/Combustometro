import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png'
import '../App.css'



export default class Loading extends Component{

    render(){
        return (
            <div className="app">
            <div >

            <img className="logo-loading"src={logo} alt="Combutômetro"/>
            
                <Link to='/selecao'>
                <button className="btn">Iniciar</button>
                </Link>
                
           </div>
           </div>
        )

    }
}

