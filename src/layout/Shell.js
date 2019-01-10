import React from 'react'
import Routes from '../config/Routes'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

import 'bootstrap/dist/css/bootstrap.min.css'

const Shell = props => (
  <div>
    <Nav />
    <h1>Shell test</h1>
    <Link to='/' className='nav-link'>
      Home
    </Link>
    <Link to='/dashboard' className='nav-link'>
      Dashboard
    </Link>
    <Routes />
  </div>
)

export default Shell
