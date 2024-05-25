import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cabecalho from './componente-cabecalho/cabecalho.jsx'
import ConsultaRAM from './consulta-ram/Consulta-ram.jsx'
import InfoNaTela from './consulta-ram/naTela.jsx'
import Tarefas from './tarefas/tarefas-componente.jsx';
import './index.css'

const routes = createBrowserRouter([
  {

    path: '/',
    element: <Cabecalho />,
    children: [
      {
        path: '/consulta-ram',
        element: <ConsultaRAM />
      },
      {
        path: '/informacao/:id',
        element: <InfoNaTela />
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>,
  )
