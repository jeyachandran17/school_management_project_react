import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Application />
    </div>
  )
}

function Application() {
  return (
    <div className="application-container">
      <NavigationBar />
      <SiteNavigationBar />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="nav-container">
      <AppBar position="static">
        <Toolbar style={{borderBottom:" 1px solid whitesmoke"}}>
          <a href="/" className='link-home' style={{marginLeft:"auto"}}>Home</a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function SiteNavigationBar() {
  return (
    <div className="siteNavigationBar-container">
      <AppBar position="static" style={{width:"min-content", height:"100vh"}}>
          <Toolbar className="siteBar">
            <a href="/" className='site-link'>Teacher</a>
            <a href="/" className='site-link'>Student</a>
            <a href="/" className='site-link'>Books</a>
            <a href="/" className='site-link'>Mark details</a>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default App
