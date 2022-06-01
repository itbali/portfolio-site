import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from "./сomponents/Navbar/Navbar";
import {Profile} from "./сomponents/Profile/Profile";
import {Route, Routes, useLocation} from "react-router-dom";
import {About} from "./сomponents/Routes/About/About";
import Background from "./сomponents/background/background";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Skills} from "./сomponents/Routes/Skills/Skills";
import Works from "./сomponents/Routes/Works/Works";
import {Contacts} from "./сomponents/Routes/Contacts/Contacts";


export const App = () => {

  const location = useLocation()
  const [isMobileWindow, setIsMobileWindow] = useState(false)
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1120) {
      setIsMobileWindow(true)
    } else setIsMobileWindow(false)
  })

  useEffect(() => {
    console.log(isMobileWindow)
  }, [isMobileWindow])
  useEffect(() => {
    if (window.innerWidth < 1120) {
      setIsMobileWindow(true)
    } else setIsMobileWindow(false)
  }, [])
  return (
    <div className={"wrapper"}>
      <Background/>

      <div className="container">
        <Navbar/>
        <Profile/>
        {isMobileWindow
          ? <>
            <About/>
            <Skills/>
            <Works/>
            <Contacts/>
          </>
          : <div className={'animeContainer'}>
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames={"fade"} timeout={1000}>
                <Routes>
                  <Route path="*" element={<About/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                  <Route path="/works" element={<Works/>}/>
                  <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </div>}
      </div>
    </div>

  )

}
