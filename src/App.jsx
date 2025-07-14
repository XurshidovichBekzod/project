import React from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Tree from './components/tree/Tree'
import Clean from './components/clean/Clean'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <Tree />
      <Products />
      <Clean/>
      <Testimonials/>
    </>
  )
}

export default App