import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../loading/logo.png'
import '../App.css'


export default class Precos extends Component {

    constructor(props){
        super(props)
        this.state = {
            VDoAlcool: 0,
            VDaGasolina: 0,
            Resultado: ' ',
        
        };

        this.precificarGasolina = this.precificarGasolina.bind(this);
        this.precificarAlcool = this.precificarAlcool.bind(this);
        this.verResultado = this.verResultado.bind(this)
      

    }

    verResultado(){
        
        if(this.state.VDaGasolina*0.7 < this.state.VDoAlcool){
            this.setState({Resultado:'/Gasolina'})
            
        }
        else{
            this.setState({Resultado:'/Alcool'})
            
        }
       
            
        }





    precificarGasolina(event){
        this.setState({VDaGasolina: event.target.value}, this.verResultado())
       
    }

    precificarAlcool(event){this.setState({VDoAlcool: event.target.value}, this.verResultado())}


    render() {
        return(

            <div  className="app">
                <div>  
                    <h1 className="titulos">Quanto tá custando a Gasolina?</h1>
                        <input  value={this.state.value} onChange={this.precificarGasolina} placeholder="Preço do litro de Gasolina" className="textarea" type="text"/>

                    <h3 className="titulos">E o Álcool?</h3>
                        <input  value={this.state.value} onChange={this.precificarAlcool}   placeholder="Preço do litro do Álcool" className="textarea" type="text"/>
                        <h3 style={{fontSize:13}} className="titulos">Dica: Use . ao invez de ,</h3>
                    <div className="btnrn">

                        <Link to={this.state.Resultado}>
                            <button onClick={this.verResultado} className="btn">Resultado</button>
                        </Link>
                        
                    </div>
                    
                    <img className="logo" src={logo} alt="Combutômetro"/> 
                
                </div>
                
            </div>
            );
        }
    }
