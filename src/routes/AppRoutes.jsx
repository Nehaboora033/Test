
import App from '../App'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Jak from '../pages/Jak'
import Moduty from '../pages/Moduty'
import DlaKogo from '../pages/DlaKogo'
import Strona from '../pages/strona'

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Strona />,
      },
      {
        path: 'dlakogo',
        element: <DlaKogo />,
      },
      {
        path: 'jak',
        element: <Jak />,
      },
      {
        path: 'moduty',
        element: <Moduty />,
      },
    ]
  }
])

export default AppRoutes