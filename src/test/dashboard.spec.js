import Dashboard from '../Components/dashboard/Dashboard';
// please add your test cases here
import {cleanup, render} from '@testing-library/react'
import React from 'react';
import Header from '../Components/header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
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

  it('should render Card Component', ()=>{
    render (<Router> <Header /></Router>, {
      container:element
    })
  })
})

export default Dashboard;