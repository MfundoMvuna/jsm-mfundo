import React from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/GPT-3.svg'


const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3</a></p>
          <p><a href='#possibility'>OpenAI</a></p>
          <p><a href='#features'>Case Library</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar