import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../loading/logo.png'
import Avatar from '../selecao/car.png'
import '../App.css'


export default class Selecao extends Component{
    render(){
        return(
            <div className="app">
            <div>
                <h1 className="titulos">Escolha um Veículo</h1>
                <div style={{display:'flex', justifyContent:"center", alignItems:'center',}} >
                    <Link to='/selecao'>
                    ◀
                    </Link>
                    <div className="avatar">
                    <img src={Avatar} alt=""/>
                    </div>
                    <Link to='/selecao'>
                    ▶
                    </Link>
                </div>
                <h1 className="titulos">Apelido</h1>

                <Link to='/precos'>
                <button className="btn">Confirmar</button>
                </Link>
                <Link to='/cadastro'>
                <button className="btn">Novo Veículo</button>
                </Link>
                <img  style={{top:75}} className="logo" src={logo} alt="Combutômetro"/>
            </div>
            
            </div>
        )
    }
}