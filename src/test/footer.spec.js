import Footer from '../Components/footer/Footer';
import {cleanup, render, screen} from '@testing-library/react'
import React from 'react';
import '@testing-library/jest-dom'
// import { Router } from 'react-router-dom';
// import Footer from '../Components/footer/Footer';
// please add your test cases here
describe ('Footer test cases', ()=>{
  let element;
  beforeEach(()=>{
    element= document.createElement('div')
    document.body.appendChild(element)
  })
  afterEach(()=>{
    cleanup();
  })

  it('Should have the bootstrap navbar class', ()=>{
    render(<Footer/>, {
      container:element
    })
    // screen.debug()
    // console.log(screen.getAllByTestId('footer-nav'))
    expect(screen.getByTestId('footer-nav')).toHaveClass('navbar')
  })


  it('Should have copyright text', ()=>{
    render(<Footer/>, {
      container:element
    })
    // screen.debug()
    // console.log(screen.getAllByTestId('footer-nav'))
    expect(screen.getByTestId('footer-nav')).toHaveTextContent('Copyright 2021')
  })
  it('Should have Subscribe button', ()=>{
    render(<Footer/>, {
      container:element
    })
    // screen.debug()
    // console.log(screen.getAllByTestId('footer'))
    expect(screen.getByRole('button')).toHaveTextContent('Subscribe')
  }) 
  
  })
  // it('Should have ')
  // it('Should have 5 links', ()=>{
  //   render((<Router><Footer /></Router>), {
  //     container:element
  //   })
  //   const count = element.querySelectorAll('a').length;
  //   // screen.debug()
  //   expect(count).toBe(5)
  // })
  // it('Should have the search bar', ()=> {
  //   render((<Router><Footer /></Router>), {
  //     container:element
  //   })
  //   // screen.debug()
  //   expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  // });
  // it('Should have a search button', ()=>{
  //   render((<Router><Footer /></Router>), {
  //     container:element
  //   })
  //   expect(screen.getByTestId('search-button')).toHaveTextContent('Search')
  // })
  // it('Should havethe Latest News Link ',()=> {
  //   render((<Router><Footer /></Router>), {
  //     container:element
  //   })
  //   screen.debug()
  //   expect(screen.getByText('Latest News')).toBeInTheDocument()
  //   // console.log(screen.getByText('Latest News'))
  // })

export default Footer;