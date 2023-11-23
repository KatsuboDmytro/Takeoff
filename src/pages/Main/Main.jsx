import React from 'react'
import { Footer, Header, Section } from '../../components'
import './main.css';

export const Main = () => {
  return (
    <>
      <Header />
      <section className='clothes__section container'>
        <Section text="woman" />
        <Section text="man" />
        <Section text="kids" />
      </section>
      <Footer /> 
    </>
 )
}
