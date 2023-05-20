import './checkoutAd.scss';

const CheckoutAd = () => {
  return(
    <div className="checkoutAd">
      <div className='leftSide'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
      </div>
      <div className="rightSide">
        <div className="subtotal">
          <p>Subtotal(0 items): <strong>$0:00</strong></p>
          <p><input type="checkbox"/>This order contains a gift</p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutAd;