import React from 'react'
import './header.css';
import people from '../../assets/Group 81.png';
import ai from '../../assets/Header Illustration.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something<br/>amazing with GPT-3<br/>OpenAI</h1>
        <div className='gpt3__header-content__input'>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          <input type='email' placeholder='Ypur Email address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

        <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
      </div>
    </div>
  )
}

export default Header