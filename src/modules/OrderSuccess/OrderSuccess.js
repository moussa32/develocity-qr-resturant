import React from 'react'
import SuccessIcon from "../../assets/images/SuccessIcon.svg"

const OrderSuccess = () => {
  return (
    <div className='flex justify-center items-center h-screen text-white text-opacity-[.85]
    text-2xl font-semibold text-center leading-9'>
      <div>
        <img className='m-auto' src={SuccessIcon} alt="Success Icon"/>     
        <h1 className='text-primary font-bold mt-8 mb-6'>Congratulations!</h1>
        <p>Your Order Has Been</p>
        <p className='mt-2'>Payed Successfuly</p>
      </div>
    </div>
  )
}

export default OrderSuccess