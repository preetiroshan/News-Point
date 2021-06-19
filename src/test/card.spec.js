import Card from '../Components/card/Card';
import {cleanup, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
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
    render (<Card />, {
      container:element
    })
    // screen.debug()
    const cardElement = document.getElementsByClassName('newsCard')[0]
    // console.log(cardElement)
    // screen.debug()
    expect(cardElement).toHaveClass('card')
  })
  it('Should render the card component with the proper props passed to it', ()=> {
    let dummyProps = {
      urlToImage: "www.myUrl.com",
      title: 'My Title'  
    }
    render(<Card 
    urlToImage = {dummyProps.urlToImage}
    title = {dummyProps.title} />, {
      container: element
    })
    // expect(screen.getByText(dummyProps.urlToImage)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
  })
})

export default Card;