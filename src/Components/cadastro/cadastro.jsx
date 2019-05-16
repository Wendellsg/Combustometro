import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../loading/logo.png'
import '../App.css'

export default class Veiculo extends Component{
    render(){
        return(

            <div className="app">
            <div>
            <h1 className="titulos">Cadastre seu Veículo</h1>
            <div className="form">
                <h3 className="titulos">Apelido do veículo</h3>
                <input placeholder="Poçante" className="forminput" type="text"/>
                <h3 className="titulos">Quanto faz na Gasolina?</h3>
                <input placeholder="Km/L" className="forminput" type="text"/>
                <h3 className="titulos">Quanto faz no Álcool</h3>
                <input placeholder="Km/L" className="forminput" type="text"/>
                <div style={{fontSize: 15}}className="btn">

                        <Link to='/finalizarcadastro'>
                            <button onClick={this.verResultado} className="btn">Finalizar</button>
                        </Link>
                        
                </div>
            <h3 style={{fontSize:13}} className="titulos">Dica: Use . ao invez de ,</h3>
            </div>
            <img style={{top:50}} className="logo" src={logo} alt="Combutômetro"/> 
            </div>
            </div>
        )
    }
}