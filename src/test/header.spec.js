import Header from '../Components/header/Header';
// please add your test cases here
import {cleanup, render, screen} from '@testing-library/react'
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import '@testing-library/jest-dom'
// import { Button } from 'bootstrap';
// please add your test cases here
describe ('Card test cases', ()=>{
  let element;
  beforeEach(()=>{
    element= document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(()=>{
    cleanup();
  })

  it('Should render the application title', ()=>{
    render((<Router><Header /></Router>), {
      container:element
    });
    expect(screen.getByText('News Point')).toBeInTheDocument()
  })
  it('Should have 4 links', ()=>{
    render((<Router><Header /></Router>), {
      container:element
    })
    const count = element.querySelectorAll('a').length;
    // screen.debug()
    expect(count).toBe(4)
  })
  it('Should not have the search bar', ()=> {
    render((<Router><Header /></Router>), {
      container:element
    })
    // screen.debug()
  });
  it('Should havethe Dashboard Link ',()=> {
    render((<Router><Header /></Router>), {
      container:element
    })
    // screen.debug()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    // console.log(screen.getByText('Latest News'))
  })

})
export default Header;