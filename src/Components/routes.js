import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Loading from './loading/Loading';
import Precos from './precos/Precos';
import Gasolina from './resultado/Gasolina';
import Alcool from './resultado/Alcool';
import Cadastro from './cadastro/cadastro';
import Finalizacadastro from './cadastro/finalizarcadastro';
import Selecao from './selecao/selecao'

export default props =>(
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Loading}/>
        <Route exact path='/selecao' component={Selecao}/>
        <Route exact path='/precos' component={Precos}/>
        <Route exact path='/gasolina' component={Gasolina}/>
        <Route exact path='/alcool' component={Alcool}/>
        <Route exact path='/cadastro' component={Cadastro}/>
        <Route exact path='/finalizarcadastro' component={Finalizacadastro}/>
        <Redirect from='*' to ='/'/>
        </Switch>
    </BrowserRouter>

)