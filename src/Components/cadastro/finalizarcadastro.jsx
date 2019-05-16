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
                <h3 style={{fontSize: 15}} className="titulos">Verifique as informações</h3>
                <h3 className="titulos">Apelido:"Apelido"</h3>
                <h3 style={{fontSize: 15}} className="titulos">Autonomia</h3>
                <div className="infoblock">
                    <div style={{marginLeft:10}}>
                        <h3 style={{fontSize: 15}} className="titulos">Gasolina</h3>
                        <h1 style={{fontFamily:'Charlotte'}} className="titulos">12.5</h1>
                        <h3 className="titulos">km/l</h3>
                    </div >
                    <div style={{backgroundColor:'#000', width:2, height:200, position:'absolute', top:430}}></div>
                    <div style={{marginLeft:100, borderLeft:2, borderColor:'#000'}}>
                        <h3 style={{fontSize: 15, }} className="titulos">Álcool</h3>
                        <h1 style={{fontFamily:'Charlotte'}} className="titulos">18.5</h1>
                        <h3 className="titulos">km/l</h3>
                    </div>
                </div>
                
                
               
                <div style={{fontSize: 15}}className="btn">

                        <Link to='/selecao'>
                            <button onClick={this.verResultado} className="btn">Confirmar</button>
                        </Link>
                        
                </div>

            </div>
            <img style={{top:50}} className="logo" src={logo} alt="Combutômetro"/> 
            </div>
           
            </div>
        )
    }
}

