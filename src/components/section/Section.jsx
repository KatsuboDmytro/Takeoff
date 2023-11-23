import React from 'react'
import './section.css'

export const Section = ({text}) => {
  const sectionStyle = {
    backgroundImage: `url(${require(`../../assets/card_header/card_${text}.png`)})`,
  };

  return (
    <article class="wrapper">
      <div class="wrapper__container">
        <div className='child section' style={sectionStyle}>
          <button>{text}</button>
        </div>
      </div>
    </article>
  )
}
