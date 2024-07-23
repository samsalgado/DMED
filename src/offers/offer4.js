import React from 'react'
import { CookiesProvider } from 'react-cookie'
import "../App.css"
import BTC from './BTCpayment'
import bnbpayment from '../pics/bnb.png'
import CustomizedDialogsBNB from './bnbdes'
const Offer4 = () => {
  return (
    <div className='box'>
        <h1>BNB Tutorial</h1>
        <CookiesProvider>
          <img src={bnbpayment} className="go" />
        <CustomizedDialogsBNB>
          <BTC />
        </CustomizedDialogsBNB>
      </CookiesProvider>
    </div>
  )
}

export default Offer4