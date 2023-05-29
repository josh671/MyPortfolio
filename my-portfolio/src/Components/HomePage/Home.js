import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material'

function HomePage() {
  return (
    <>
   
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', marginTop:'50px', padding:'20px' }} >
          <div>
            <p>Welcome!</p>
            <p>Hello, my name is Joshua and I am currently a student at North Seattle College. Currently I am in pursuit of a Bachelor’s Degree in Applications Development where I am learning to become a software developer. I have a passion for learning and problem solving through team collaboration and am highly motivated at the opportunity to apply and develop my technical skills, providing better solutions to my employer and their clients. 
            </p>
          </div>
        </Box>
        <Box>
          <p>Hobbies</p>
          <ul>
            <li>Coding/Building new Projects</li>
            <li>Reading</li>
            <ul>
              <li>Fantasy</li>
              <li>Myster Novels</li>
              <li>History</li>
            </ul>
            <li>Gaming</li>
            <ul>
              <li>Warzone 2.0</li>
              <li>Apex</li>
              <li>Battlefield 2042</li>
              <li>Cyberpunk 2077</li>
              <li>Elder Scrolls</li>
            </ul>
          </ul>
        </Box>
      </Container>
     
   
   
    </>
  )
}

export default HomePage
