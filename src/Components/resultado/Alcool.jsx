import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../loading/logo.png'
import '../App.css'


export default class Precos extends Component {
    render(){
        return(
            <div className="app">
                <div>
                    <h1 className="titulos">Vá de</h1>
                    <h1 className="resultado">Álcool</h1>
                    <h3 className="titulos">Obrigado por usar o app!</h3>
                        <div className="btnrna">
                            <Link to='/precos'>
                                <button className="btn">Refazer</button>
                            </Link>
                        </div>
                <img className="logor" src={logo} alt="Combutômetro"/>
                </div>
                
            </div>
        )
    }
}