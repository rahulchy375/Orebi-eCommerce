import React from 'react'
import NavSection from '../components/NavSection'
import HeaderSection from '../components/HeaderSection'
import { Outlet } from 'react-router-dom'
import FooterSection from '../components/FooterSection'

const Layout = () => {
  return (
    <>
    <NavSection/>
    <HeaderSection/>
    <Outlet/>
    <FooterSection/>
    </>
  )
}

export default Layout