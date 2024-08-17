import { Button } from '@mui/material'
import React from 'react'
import Headr from './companent/headr'
import Section1 from './companent/section1'
import Crud from './companent/crud'
import Footer from './companent/footer'


const App = () => {
  return (
    <div>
    <Headr />
    <Section1/>
    <Crud />
<Footer/>
    </div>
  )
}


export default App