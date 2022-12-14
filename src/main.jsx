import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {Counter} from './CounterApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      
        <Counter value={1}/>
    </React.StrictMode>
)