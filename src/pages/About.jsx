import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
     <div>About</div>
     <NavLink to={"/home"}>Home page</NavLink>
    </>
  )
}

export default About