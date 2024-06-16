import React from 'react'
import MainComp from './components/MainComponent/MainComponent'
import TypesComp from './components/TypesComponent/TypesComponent'
import ProektComp from './components/ProektComponent/ProektComponent'
import MoreArticleComp from './components/MoreArticleComponent/MoreArticleComponent'
import FooterComp from './components/FooterComponent/FooterComponent'
import  { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <MainComp />
      <TypesComp />
      <Outlet />
      <ProektComp />
      <MoreArticleComp />
      <FooterComp />
    </>
  )
}


export default App;
