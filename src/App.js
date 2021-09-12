import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Header from './components/Header'
import Body from './containers/Body'
import Search from './components/Search'
import Footer from './components/Footer'



function App() {
  return (
      <>
        <Header />
        <Search />
        <Body />
        <Footer/>
      </>
  )
}

export default App
