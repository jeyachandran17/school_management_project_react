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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



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
      <DashBoard />
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
      <AppBar position="static" style={{width:"min-content", minHeight:"100vh"}}>
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


function DashBoard() {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-nav">
        <SiteNavigationBar />
      </div>
      <div className="Dashboard-container">
        <Card>
          <div className="title-container">
            <div className='title-image-container'>
              <img src="https://images.theconversation.com/files/474980/original/file-20220719-10097-fbzwr5.jpg?ixlib=rb-1.1.0&rect=13%2C8%2C2982%2C1953&q=45&auto=format&w=926&fit=clip" alt="school image" />
            </div>
            <CardContent>
              <div className="title-contant">
                <div className="school-environment">
                  <h3>School Environment</h3>
                  <p style={{textIndent:"20px"}}>A school environment plays a crucial role in shaping a student’s life. It is a place where we learn, grow, and develop essential skills.</p>
                </div>
                <div className="physical-environment">
                  <h3>Physical Environment</h3>
                  <p style={{textIndent:"20px"}}>The physical environment includes classrooms, libraries, labs, and playgrounds. It should be clean, safe, and conducive to learning.</p>
                </div>
                <div className="social-environment">
                  <h3>Social Environment</h3>
                  <p style={{textIndent:"20px"}}>The social environment involves relationships with teachers and peers. A positive social environment promotes respect, cooperation, and understanding.</p>
                </div>
                <div className="academic-environment">
                  <h3>Academic Environment</h3>
                  <p style={{textIndent:"20px"}}>The academic environment focuses on learning and intellectual growth. It encourages curiosity, creativity, and critical thinking.</p>
                  <p style={{textIndent:"20px"}}>In conclusion, a good school environment nurtures and inspires students to reach their full potential.</p>
                </div>
              </div>
            </CardContent>   
          </div>
        </Card>
        <Card>
          <div className="title-container">
            <CardContent>
              <div className="title-contant">
                <div className="school-environment">
                  <h3>Education system</h3>
                  <p style={{textIndent:"20px"}}>Education helps in the mental and intellectual nourishment and growth of a person. Without education an individual cannot progress intellectually, and cannot develop skills and capacities to work. Education fosters the enlightenment, empowerment and emancipation of society. Without education a society will be socially, economically and politically backward. Education is what serves to make a nation strong, capable, powerful and resilient, and take it forward. Education is, therefore, very important for every individual person, and as a whole for every society and nation. Hence, education must be available to all the children and youth of a nation without any discrimination.</p>
                </div>
              </div>
            </CardContent>  
              <div className='title-image-container'>
                <img src="https://mediaindia.eu/wp-content/uploads/2020/12/School-children-in-India.jpg" alt="school image" />
              </div>
          </div>
        </Card>
        <Card>
          <div className="title-container">
            <div className='title-image-container'>
              <img src="https://www.innocenthearts.in/wp-content/uploads/2019/06/volleyball.jpg" alt="school image" />
            </div>
            <CardContent>
              <div className="title-contant">
                <div className="school-environment">
                  <h3>Sports</h3>
                  <p style={{textIndent:"20px"}}>Sports are an inseparable part of education. Every curriculum must include some kind of sporting activity.</p>
                  <p style={{textIndent:"20px"}}>It is considered a form of Physical education. This is training of the body as education is training the mind.</p>
                  <p style={{textIndent:"20px"}}>A sport is a physical activity that balances out all the mental activities that take place in school. It gives a break from the monotony of the class instructions.</p>
                  <p style={{textIndent:"20px"}}>Sports can be considered one of the subjects taught in the curriculum that some students will excel in and so need guidance.</p>
                  <p style={{textIndent:"20px"}}>Sports keep the body of the student fit and supple. The body becomes healthy and prepares their mind for studies.</p>
                  <p style={{textIndent:"20px"}}>In sports, concentration is an important factor. Learning concentration in sports helps in studies as well.</p>
                  <p style={{textIndent:"20px"}}>In team sports, a student learns the value of team work which is an essential part of education for the real world.</p>
                  <p style={{textIndent:"20px"}}>Sports give students a platform on which the students learn to perform in public. This builds confidence and takes away a part of the stage fright.Sports must always be encouraged in all schools.</p>
                </div>
              </div>
            </CardContent>   
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App
