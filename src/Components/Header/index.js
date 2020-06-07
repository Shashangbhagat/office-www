import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <AppBar position='sticky' color='secondary'>
        <Toolbar>
          <div className='col-2 text-center'>
            <Link to='/' >Dashboard</Link>
          </div>
          <div className='col-2 text-center'>
            <Link to='/parties' >Parties</Link>
          </div>
          <div className='col-2 text-center'>
            <Link to='/login' >Login</Link>
          </div>
          <div className='col-2 text-center'>
            <Link to='/signup' >Signup</Link>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
export default Header