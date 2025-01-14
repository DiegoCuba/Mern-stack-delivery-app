import React from 'react';
import { render,  screen,act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppContext from '../../context/app-context'
import SingleCartProduct from './SingleCartProduct'

let deleteOfCart = jest.fn(),
 deleteOfTotalCost= jest.fn(),
  addToTotalCost  = jest.fn(),
actualizeCart= jest.fn()

  let product  = {
 info:{
name:'hot dog',
price:350,
size:'400 gr'
 },
 quantity: 1
  }

 it('render product info correctly', ()=>{


   render(
            <AppContext.Provider value={{deleteOfCart,deleteOfTotalCost}}>
                <SingleCartProduct product={product}/>
            </AppContext.Provider>
        )
       
   expect(screen.getByText('hot dog')).toBeInTheDocument()
  expect(screen.getByText('350 x 400 gr')).toBeInTheDocument()
  expect(screen.getByTestId('quantity')).toHaveTextContent('1')


 })


 it('trigger deleteOfCart fuction when click on delete button', ()=>{

   render(
            <AppContext.Provider value={{deleteOfCart,deleteOfTotalCost}}>
                <SingleCartProduct product={product}/>
            </AppContext.Provider>
        )

userEvent.click(screen.getByTestId('deleteProduct'))

 expect(deleteOfCart.mock.calls.length).toBe(1)
 expect(deleteOfTotalCost.mock.calls.length).toBe(1)

 

 })

  it('trigger increment and decrement counter and display correct quantity', ()=>{

  render(
         <AppContext.Provider value={{deleteOfCart,deleteOfTotalCost,addToTotalCost,actualizeCart}}>
                <SingleCartProduct product={product}/>
            </AppContext.Provider>
        )

        const increaseButton= screen.getByRole('button', {
  name: '+'})
       const decreaseButton= screen.getByRole('button', {
  name: /-/})

  
  expect(screen.getByTestId('quantity')).toHaveTextContent('1')

 userEvent.click(increaseButton)
 userEvent.click(increaseButton)
 
 expect(addToTotalCost.mock.calls.length).toBe(2)
expect(actualizeCart.mock.calls.length).toBe(2)


  expect(screen.getByTestId('quantity')).toHaveTextContent('3')

 userEvent.click(decreaseButton)

  expect(deleteOfTotalCost.mock.calls.length).toBe(1)
expect(actualizeCart.mock.calls.length).toBe(3)

  expect(screen.getByTestId('quantity')).toHaveTextContent('2')


  })
       



 

  
