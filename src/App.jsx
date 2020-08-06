import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props => (
    <div className="App">

    <Card titulo="#6 - Condicional versão 2">
          <CondicionalComIf numero={11}></CondicionalComIf>          
    </Card>   


    <Card titulo="#5 - Condicional versão 1">
          <Condicional numero={11}></Condicional>           
    </Card>   

    <Card titulo="#4 - Repetição">
          <Repeticao></Repeticao>            
    </Card>   

    <Card titulo="#3 - Componente Com Filhos">
    <ComFilhos>
    <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Calors</li>
        <li>Daniel</li>
    </ul>
    </ComFilhos>
    </Card>

    <Card titulo="#2 - Componente com parametro">
        <ComParametro titulo="Esse é o titulo"
        subtitulo="Esse é o subtitulo"/>
    </Card>

    <Card titulo="#01 - Primeiro Componente">
    <Primeiro/>
    </Card>
   
    </div>
);
