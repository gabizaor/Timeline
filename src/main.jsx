import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

// importa o DOM de ReactDOM e o método createRoot
// Document Bject Mode (DOM) faz a ligação entre a propria DOM e o React
// Resumidamente, com o DOM o react irá funcionar perfeitamente no ambiente Web
// Root é o nosso elemento raiz, então o React irá criar toda a nossa aplicação dentro dele 

ReactDOM.createRoot(document.getElementById('root')).render(
 // renderiza o componente App dentro do elemento com id root
 <React.StrictMode>
    <App />
  </React.StrictMode>,
)
