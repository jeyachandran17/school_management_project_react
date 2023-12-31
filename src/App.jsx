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
import { Routes, Route, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import studenticon from '../images/fellowship.png';
import classroomicon from '../images/classroom.png';



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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/student-standrad" element={<StudentStandrad />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
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
          <Link to="/" className='link-home' style={{marginLeft:"auto"}}>Home</Link>
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
          <Link to="/student-standrad" className='site-link'>Student</Link>
          <Link to="/teacher" className='site-link'>Teacher</Link>
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

function Admission() {

  const handleChange = (event) => {
    setClass(event.target.value);
  };
  const BloodhandleChange = (event) => {
    setBlood(event.target.value);
  };
  return (
    <div className="admission-container">
      <div className="admission-nav">
        <NavigationBar />
      </div>
      <div className="admission-contant">
        <div className='admission-siteNav'>
          <SiteNavigationBar />
        </div>
        <div className="admission-form-container">
          <form action="" className='admission-form-control'>
            <div className="admission-title">
              <h2 style={{textAlign:"center"}}>Student Admission Form</h2>
            </div>
            <div className="student-details-container">
              <div className="student-details-title">
                <h3>Student Details</h3>
              </div>
              <div className="student-details-contant">
                <div className="filed">
                  <TextField id="outlined-basic" label="Student Name" variant="outlined" />
                </div>
                <div className="filed">
                  <TextField id="outlined-basic" label="Age" variant="outlined" />
                </div>
                <div className="filed" style={{display:"flex", flexDirection:"column", gap:"3px"}}>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>
                            <div className="filed">
              <TextField id="outlined-basic" label="Aadher Number" variant="outlined" />
            </div>  
                <div className="stadard-filed">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Blood Group"
                      onChange={BloodhandleChange}
                    >
                      <MenuItem value="A+">A+</MenuItem>
                      <MenuItem value="A-">A-</MenuItem>
                      <MenuItem value="B+">B+</MenuItem>
                      <MenuItem value="B-">B-</MenuItem>
                      <MenuItem value="O+">O+</MenuItem>
                      <MenuItem value="O-">O-</MenuItem>
                      <MenuItem value="AB+">AB+</MenuItem>
                      <MenuItem value="AB-">AB-</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="stadard-filed">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Standrad</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="standard"
                      onChange={handleChange}
                    >
                      <MenuItem value="6th Standard">6<sup>th</sup></MenuItem>
                      <MenuItem value="7th Standard">7<sup>th</sup></MenuItem>
                      <MenuItem value="8th Standard">8<sup>th</sup></MenuItem>
                      <MenuItem value="9th Standard">9<sup>th</sup></MenuItem>
                      <MenuItem value="10th Standard">10<sup>th</sup></MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            



            <div className="filed">
              <TextField id="outlined-basic" label="Admission Number" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Register Number" variant="outlined" />
            </div>

            <div className="filed">
              <TextField id="outlined-basic" label="Father Name" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Father's Profession" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Mother Name" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Mother's Profession" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Mole" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Scar" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Address" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="State" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="District" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Pincode" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Skill" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
            </div>
            <div className="filed">
              <TextField id="outlined-basic" label="Email ID" variant="outlined" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function StudentStandrad() {
  return (
    <div className="student-main-container">
      <div className="student-navBar-container">
        <NavigationBar />
      </div>
      <div className="student-standard-container">
        <div className='admission-siteNav'>
          <SiteNavigationBar />
        </div>
        <div className="student-standard-contant">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="student-classlist">
                <div className='studenticon-container'>
                  <img src={classroomicon} alt="students icon" className='studenticon-img'/>
                </div>
                <div className='student-classlist-container'>
                  <Card>
                    <CardContent>
                      <div className='classlist-view'>
                        <h3>6<sup>th</sup> Standard</h3>
                        <Button variant='outlined' onClick={()=>navigate()}>View Students</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className='classlist-view'>
                        <h3>7<sup>th</sup> Standard</h3>
                        <Button variant='outlined' onClick={()=>navigate()}>View Students</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className='classlist-view'>
                        <h3>8<sup>th</sup> Standard</h3>
                        <Button variant='outlined' onClick={()=>navigate()}>View Students</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className='classlist-view'>
                        <h3>9<sup>th</sup> Standard</h3>
                        <Button variant='outlined' onClick={()=>navigate()}>View Students</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className='classlist-view'>
                        <h3>10<sup>th</sup> Standard</h3>
                        <Button variant='outlined' onClick={()=>navigate()}>View Students</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                </div>
              </div>
            </CardContent>
          </Card>  
        </div>
      </div>
    </div>
  );
}

function Teacher() {
  return (
    <div className="teacherslist">
      <div className="admission-nav">
        <NavigationBar />
      </div>
      <div className="teacherlist-container">
        <div className='admission-siteNav'>
          <SiteNavigationBar />
        </div>
      </div>
    </div>
  );
}

export default App
