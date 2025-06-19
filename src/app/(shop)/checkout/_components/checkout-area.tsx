'use client';
// import { useState } from "react";
// import ProductList from "./product-list";
// import ShippingOptions from "./shipping-options";
// import PaymentOptions from "./payment-options";
// import CheckoutVerifyArea from "./checkout-verify-area";
// import NiceSelect from "@/components/ui/nice-select";


// const products = [
//    { name: "Nar Allt Ar Over", quantity: 2, price: 76 },
//    { name: "Under en rosa Himmel", quantity: 1, price: 74 },
//    { name: "Michael Connelly", quantity: 3, price: 362 },
//    { name: "Body Works Mens Collection", quantity: 1, price: 145 }
// ];

// const shippingOptions = [
//    { id: "flat_rate", label: "Flat rate", price: 20 },
//    { id: "local_pickup", label: "Local pickup", price: 25 },
//    { id: "free_shipping", label: "Free shipping", price: 0 }
// ];

// const paymentOptions = [
//    { id: "back_transfer", label: "Direct Bank Transfer", description: "Make your payment directly into our bank account. Please use your Order ID as the payment reference." },
//    { id: "cheque_payment", label: "Cheque Payment", description: "Make your payment directly into our bank account." },
//    { id: "cod", label: "Cash on Delivery", description: "Make your payment directly into our bank account." }
// ];

export default function CheckoutArea() {
   // const [shipping, setShipping] = useState("flat_rate");
   // const [paymentMethod, setPaymentMethod] = useState("back_transfer");


   // const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

   // function handleCountry(item: { value: string; label: string }) {
   //    console.log(item);
   // }

   return (
      // <section className="tp-checkout-area pt-120 pb-120" style={{ backgroundColor: "#EFF1F5" }}>
      //    <div className="container">
      //       <div className="row">
      //          <div className="col-xl-7 col-lg-7">
      //             <CheckoutVerifyArea />
      //          </div>
      //       </div>

      //       {/* <form action="#">
      //          <div className="row">
      //             <div className="col-lg-7">
      //                <div className="tp-checkout-bill-area">
      //                   <h3 className="tp-checkout-bill-title">Billing Details</h3>

      //                   <div className="tp-checkout-bill-form">
      //                      <div className="tp-checkout-bill-inner">
      //                         <div className="row">
      //                            <div className="col-md-6">
      //                               <div className="tp-checkout-input">
      //                                  <label>First Name <span>*</span></label>
      //                                  <input type="text" placeholder="First Name">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-6">
      //                               <div className="tp-checkout-input">
      //                                  <label>Last Name <span>*</span></label>
      //                                  <input type="text" placeholder="Last Name">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Company name (optional)</label>
      //                                  <input type="text" placeholder="Example LTD.">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Country / Region </label>
      //                                  <input type="text" placeholder="United States (US)">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Street address</label>
      //                                  <input type="text" placeholder="House number and street name">
      //                               </div>

      //                               <div className="tp-checkout-input">
      //                                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Town / City</label>
      //                                  <input type="text" placeholder="">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-6">
      //                               <div className="tp-checkout-input">
      //                                  <label>State / County</label>
      //                                  <select>
      //                                     <option>New York US</option>
      //                                     <option>Berlin Germany</option>
      //                                     <option>Paris France</option>
      //                                     <option>Tokiyo Japan</option>
      //                                  </select>
      //                               </div>
      //                            </div>
      //                            <div className="col-md-6">
      //                               <div className="tp-checkout-input">
      //                                  <label>Postcode ZIP</label>
      //                                  <input type="text" placeholder="">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Phone <span>*</span></label>
      //                                  <input type="text" placeholder="">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Email address <span>*</span></label>
      //                                  <input type="email" placeholder="">
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-option-wrapper">
      //                                  <div className="tp-checkout-option">
      //                                     <input id="create_free_account" type="checkbox">
      //                                        <label for="create_free_account">Create an account?</label>
      //                                  </div>
      //                                  <div className="tp-checkout-option">
      //                                     <input id="ship_to_diff_address" type="checkbox">
      //                                        <label for="ship_to_diff_address">Ship to a different address?</label>
      //                                  </div>
      //                               </div>
      //                            </div>
      //                            <div className="col-md-12">
      //                               <div className="tp-checkout-input">
      //                                  <label>Order notes (optional)</label>
      //                                  <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
      //                               </div>
      //                            </div>
      //                         </div>
      //                      </div>
      //                   </div>
      //                </div>
      //             </div>
      //             <div className="col-lg-5">
      //                <div className="tp-checkout-place white-bg">
      //                   <h3 className="tp-checkout-place-title">Your Order</h3>

      //                   <div className="tp-order-info-list">
      //                      <ul>

      //                         <!-- header -->
      //                         <li className="tp-order-info-list-header">
      //                            <h4>Product</h4>
      //                            <h4>Total</h4>
      //                         </li>

      //                         <!-- item list -->
      //                         <li className="tp-order-info-list-desc">
      //                            <p>Nar Allt Ar Over <span> x 2</span></p>
      //                            <span>$76:00</span>
      //                         </li>
      //                         <li className="tp-order-info-list-desc">
      //                            <p> 	Under en rosa Himmel <span> x 1</span></p>
      //                            <span>$74:00</span>
      //                         </li>
      //                         <li className="tp-order-info-list-desc">
      //                            <p>Michael Connelly  <span> x 3</span></p>
      //                            <span>$362:00</span>
      //                         </li>
      //                         <li className="tp-order-info-list-desc">
      //                            <p>Body Works Mens Collection <span> x 1</span></p>
      //                            <span>$145:00</span>
      //                         </li>

      //                         <!-- subtotal -->
      //                         <li className="tp-order-info-list-subtotal">
      //                            <span>Subtotal</span>
      //                            <span>$507.00</span>
      //                         </li>

      //                         <!-- shipping -->
      //                         <li className="tp-order-info-list-shipping">
      //                            <span>Shipping</span>
      //                            <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
      //                               <span>
      //                                  <input id="flat_rate" type="radio" name="shipping">
      //                                     <label for="flat_rate">Flat rate: <span>$20.00</span></label>
      //                               </span>
      //                               <span>
      //                                  <input id="local_pickup" type="radio" name="shipping">
      //                                     <label for="local_pickup">Local pickup: <span>$25.00</span></label>
      //                               </span>
      //                               <span>
      //                                  <input id="free_shipping" type="radio" name="shipping">
      //                                     <label for="free_shipping">Free shipping</label>
      //                               </span>
      //                            </div>
      //                         </li>

      //                         <!-- total -->
      //                         <li className="tp-order-info-list-total">
      //                            <span>Total</span>
      //                            <span>$1,476.00</span>
      //                         </li>
      //                      </ul>
      //                   </div>
      //                   <div className="tp-checkout-payment">
      //                      <div className="tp-checkout-payment-item">
      //                         <input type="radio" id="back_transfer" name="payment">
      //                            <label for="back_transfer" data-bs-toggle="direct-bank-transfer">Direct Bank Transfer</label>
      //                            <div className="tp-checkout-payment-desc direct-bank-transfer">
      //                               <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
      //                            </div>
      //                      </div>
      //                      <div className="tp-checkout-payment-item">
      //                         <input type="radio" id="cheque_payment" name="payment">
      //                            <label for="cheque_payment">Cheque Payment</label>
      //                            <div className="tp-checkout-payment-desc cheque-payment">
      //                               <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
      //                            </div>
      //                      </div>
      //                      <div className="tp-checkout-payment-item">
      //                         <input type="radio" id="cod" name="payment">
      //                            <label for="cod">Cash on Delivery</label>
      //                            <div className="tp-checkout-payment-desc cash-on-delivery">
      //                               <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
      //                            </div>
      //                      </div>
      //                      <div className="tp-checkout-payment-item paypal-payment">
      //                         <input type="radio" id="paypal" name="payment">
      //                            <label for="paypal">PayPal <img src="assets/img/shop/payment-option.png" alt=""> <a href="#">What is PayPal?</a></label>
      //                      </div>
      //                   </div>
      //                   <div className="tp-checkout-agree">
      //                      <div className="tp-checkout-option">
      //                         <input id="read_all" type="checkbox">
      //                            <label for="read_all">I have read and agree to the website.</label>
      //                      </div>
      //                   </div>
      //                   <div className="tp-checkout-btn-wrapper">
      //                      <a href="#" className="tp-checkout-btn w-100">Place Order</a>
      //                   </div>
      //                </div>
      //             </div>
      //          </div>
      //       </form> */}
      //       <form>
      //          <div className="row">
      //             <div className="col-lg-7">
      //                <div className="tp-checkout-bill-area">
      //                   <h3 className="tp-checkout-bill-title">Billing Details</h3>

      //                   <div className="tp-checkout-bill-form">
      //                      <div className="tp-checkout-bill-inner">
      //                         <div className="row">
      //                            {/* Billing Input Fields */}
      //                            <InputField col="6" label="First Name" required />
      //                            <InputField col="6" label="Last Name" required />
      //                            <InputField label="Company name (optional)" />
      //                            <InputField label="Country / Region" />
      //                            <InputField label="Street address" />
      //                            <InputField label="" placeholder="Apartment, suite, unit, etc. (optional)" />
      //                            <InputField label="Town / City" />
      //                            <SelectField label="State / County" options={[{ value: 'us', label: "New York US" }, { value: 'de', label: "Berlin Germany" }, { value: 'fr', label: "Paris France" }, { value: 'jp', label: "Tokyo Japan" }]} onChange={handleCountry} />
      //                            <InputField col="6" label="Postcode ZIP" />
      //                            <InputField label="Phone" required />
      //                            <InputField label="Email address" type="email" required />

      //                            {/* Checkbox Options */}
      //                            <div className="tp-checkout-option-wrapper">
      //                               <CheckboxOption id="create_free_account" label="Create an account?" />
      //                               <CheckboxOption id="ship_to_diff_address" label="Ship to a different address?" />
      //                            </div>

      //                            {/* Order Notes */}
      //                            <TextAreaField label="Order notes (optional)" placeholder="Notes about your order, e.g. special notes for delivery." />
      //                         </div>
      //                      </div>
      //                   </div>
      //                </div>
      //             </div>

      //             <div className="col-lg-5">
      //                <div className="tp-checkout-place white-bg">
      //                   <h3 className="tp-checkout-place-title">Your Order</h3>
      //                   <div className="tp-order-info-list">
      //                      <ul>


      //                         {/* Product List */}
      //                         <ProductList products={products} />

      //                         {/* Subtotal */}
      //                         <li className="tp-order-info-list-subtotal">
      //                            <span>Subtotal</span>
      //                            <span>${totalPrice.toFixed(2)}</span>
      //                         </li>

      //                         {/* Shipping Options */}
      //                         <ShippingOptions options={shippingOptions} selectedOption={shipping} onOptionChange={setShipping} />

      //                         {/* Total */}
      //                         <li className="tp-order-info-list-total">
      //                            <span>Total</span>
      //                            <span>
      //                               ${(
      //                                  totalPrice +
      //                                  (shippingOptions.find(opt => opt.id === shipping)?.price || 0)
      //                               ).toFixed(2)}
      //                            </span>
      //                         </li>
      //                      </ul>
      //                   </div>

      //                   {/* Payment Options */}
      //                   <PaymentOptions options={paymentOptions} selectedOption={paymentMethod} onOptionChange={setPaymentMethod} />

      //                   {/* Agreement Checkbox */}
      //                   <div className="tp-checkout-agree">

      //                   <CheckboxOption id="read_all" label="I have read & agree to the website terms." />
      //                   </div>

      //                   {/* Place Order Button */}
      //                   <div className="tp-checkout-btn-wrapper">
      //                      <button type="submit" className="tp-checkout-btn w-100">Place Order</button>
      //                   </div>
      //                </div>
      //             </div>
      //          </div>
      //       </form>
      //    </div>
      // </section>

       <div
         style={{
         display: "flex",
         width: "1440px",
         flexDirection: "column",
         alignItems: "center",
         gap: "80px",
         background: "#FFF"
         }}>

      {/* Frame 2147224356   */}
      <div
         style={{
         display: "flex",
         width: "1103px",
         alignItems: "flex-start",
         gap: "32px"
      }}>

  {/* Frame 2147224356 content goes here */}
    {/* Frame 12651 */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}
    >
      {/* Frame 12651 content goes here */}
        {/* Frame 1000007810 */}
  <div
    style={{
      display: "flex",
      width: "644px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "60px",
      borderRadius: "8px"
    }}
  >
    {/* Frame 1000007810 content goes here */}
      {/* Frame 1000007809 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px",
      alignSelf: "stretch"
    }}
  >
    {/* Frame 1000007809 content goes here */}
      {/* Frame 1000007804 */}
  <div
    style={{
      display: "flex",
      padding: "20px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "32px",
      alignSelf: "stretch",
      borderRadius: "8px",
      background: "#FFF"
    }}
  >
    {/* Frame 1000007804 content goes here */}
      <span
    style={{
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      alignSelf: "stretch"
    }}
  >
    Checkout
  </span>
    {/* Frame 1000007803 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      alignSelf: "stretch",
      background: "#FFF"
    }}
  >
    {/* Frame 1000007803 content goes here */}
      <span
    style={{
      alignSelf: "stretch",
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal"
    }}
  >
    Billing Address
  </span>
  </div>

   {/* Frame 1000007802 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      alignSelf: "stretch",
      background: "#FFF"
    }}
  >
    {/* Frame 1000007802 content goes here */}
      <span
    style={{
      alignSelf: "stretch",
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal"
    }}
  >
    Country
  </span>
    {/* Frame 1000007801 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      alignSelf: "stretch",
      background: "#FFF"
    }}
  >
    {/* Frame 1000007797 */}
    <div
      style={{
        display: "flex",
        padding: "10px 20px",
        justifyContent: "center",
        alignItems: "center",
        gap: "48px",
        borderRadius: "8px",
        border: "1px solid #DBDADE",
        background: "#FFF"
      }}
    >
      {/* Frame 1000007796 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}
      >
        {/* Frame 1000007796 content goes here */}

        {/* SVG Icon */}
          <div
    style={{
      width: "24px",
      height: "24px"
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22M22.5 12C22.5 6.47715 18.0228 2 12.5 2M22.5 12H2.5M12.5 22C6.97715 22 2.5 17.5228 2.5 12M12.5 22C9.93223 19.3038 8.5 15.7233 8.5 12C8.5 8.27674 9.93223 4.69615 12.5 2M12.5 22C15.0678 19.3038 16.5 15.7233 16.5 12C16.5 8.27674 15.0678 4.69615 12.5 2M2.5 12C2.5 6.47715 6.97715 2 12.5 2" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>

    {/* Country Name */}
  <span
    style={{
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal"
    }}
  >
    United Arab Emirates
  </span>
      </div>

        {/* Down Arrow Frame */}
  <div
    style={{
      display: "flex",
      width: "8px",
      height: "4.667px",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {/* You can place a down arrow SVG here if needed */}
    <div
    style={{
      width: "8px",
      height: "4.667px",
      flexShrink: 0
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
      <path d="M1.5 1.59375L4.5 4.39375L7.5 1.59375" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>


  </div>
    </div>

   {/* Down Arrow Frame text */}
  <span
    style={{
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "normal",
      marginLeft: "8px",
      alignSelf: "stretch"
    }}
  >
    DTMA is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
  </span>
  </div>
  </div>
  </div>

    {/* Payment methods section */}
  <div
    style={{
      display: "flex",
      width: "644px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      background: "#FFF"
    }}
  >
    {/* Payment methods content goes here */}
      {/* Frame 1000007800 */}
  <div
    style={{
      display: "flex",
      padding: "20px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "24px",
      alignSelf: "stretch",
      borderRadius: "8px",
      background: "#FFF"
    }}
  >
    {/* Payment Details text */}
    <span
      style={{
        alignSelf: "stretch",
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      Payment Details
    </span>
    {/* Frame 1000007799 */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
        background: "#FFF"
      }}
    >
      {/* Frame 155 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          alignSelf: "stretch"
        }}
      >
        {/* Frame 155 content goes here */}
          {/* Master Card 1 */}
  <div
    style={{
      height: "106px",
      flex: "1 0 0",
      display: "flex",
      alignItems: "center",
      position: "relative"
    }}
  >
    {/* Base */}
    <div
      style={{
        width: "190.667px",
        height: "106px",
        flexShrink: 0,
        borderRadius: "8px",
        border: "1px solid #D8E0E9",
        background: "#FFF"
      }}
    >
      {/* Base content goes here */}
    </div>

    {/* Amex */}
    <div
    style={{
      width: "36.268px",
      height: "24px",
      flexShrink: 0,
      position: "absolute",
      top: "16px",
      left: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <div
      style={{
        width: "36.268px",
        height: "24px",
        flexShrink: 0,
        filter: "drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.10))"
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="117" height="104" viewBox="0 0 117 104" fill="none">
        <g filter="url(#filter0_d_10705_1544)">
          <rect x="40.0781" y="40" width="36.2681" height="24" rx="5" fill="#1F72CD"/>
        </g>
        <defs>
          <filter id="filter0_d_10705_1544" x="0.078125" y="0" width="116.266" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="20"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10705_1544"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10705_1544" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    <div
      style={{
        width: "30.067px",
        height: "7.256px",
        flexShrink: 0,
        fill: "#FFF",
        marginTop: "-18px"
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="8" viewBox="0 0 31 8" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.58082 0.5L0.1875 7.74674H4.24978L4.75338 6.59131H5.90451L6.40811 7.74674H10.8795V6.86488L11.278 7.74674H13.5909L13.9894 6.84624V7.74674H23.2887L24.4195 6.62131L25.4783 7.74674L30.2546 7.75606L26.8506 4.1436L30.2546 0.5H25.5523L24.4516 1.60463L23.4262 0.5H13.3097L12.441 2.37045L11.5519 0.5H7.49811V1.35186L7.04715 0.5H3.58082ZM4.36334 1.52942H6.34349L8.59429 6.44347V1.52942H10.7635L12.5019 5.05277L14.1041 1.52942H16.2625V6.72943H14.9492L14.9385 2.65473L13.0238 6.72943H11.849L9.92361 2.65473V6.72943H7.22186L6.70965 5.56366H3.94242L3.43127 6.72841H1.9837L4.36334 1.52942ZM22.8036 1.52942H17.4634V6.72637H22.7209L24.4154 5.00402L26.0487 6.72637H27.7561L25.2745 4.14295L27.7561 1.52942H26.1228L24.4368 3.232L22.8036 1.52942ZM5.32709 2.40942L4.41541 4.48615H6.23771L5.32709 2.40942ZM18.781 3.55515V2.60589V2.60498H22.1131L23.567 4.12309L22.0486 5.6495H18.781V4.61318H21.6943V3.55515H18.781Z" fill="white"/>
      </svg>
    </div>
  </div>

    {/* Group 158 */}
  <div
    style={{
      width: "140.928px",
      height: "42px",
      flexShrink: 0,
      position: "absolute",
      left: "16px",
      bottom: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    <span
      style={{
        width: "140.928px",
        color: "#4B566B",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "150%"
      }}
    >
      **** **** **** 4765
    </span>
    <span
      style={{
        width: "124.348px",
        color: "#4B566B",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "150%"
      }}
    >
      Faisal Mohammed
    </span>
  </div>
  </div>

  {/* Master Card 2 */}
<div
  style={{
    height: "106px",
    flex: "1 0 0",
    display: "flex",
    alignItems: "center",
    position: "relative"
  }}
>
  {/* MCD */}
  <div
    style={{
      width: "190.667px",
      height: "106px",
      flexShrink: 0,
      position: "relative"
    }}
  >
    {/* B1 */}
    <div
      style={{
        width: "190.667px",
        height: "106px",
        flexShrink: 0,
        borderRadius: "8px",
        border: "1px solid #D8E0E9",
        background: "#FFF"
      }}
    >
      {/* B1 content goes here */}
    </div>
    {/* Group 158 */}
    <div
      style={{
        width: "140.928px",
        height: "42px",
        flexShrink: 0,
        position: "absolute",
        left: "16px",
        bottom: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <span
        style={{
          width: "140.928px",
          color: "#4B566B",
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "150%"
        }}
      >
        **** **** **** 4765
      </span>
       <span
      style={{
      width: "124.348px",
      color: "#4B566B",
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%"
    }}
  >
    Faisal Mohammed
  </span>
    </div>
  </div>

  {/* MC2 */}
    <div
      style={{
        width: "36.268px",
        height: "24px",
        flexShrink: 0,
        position: "absolute",
        top: "16px",
        left: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* base2 */}
      <div
        style={{
          width: "36.268px",
          height: "24px",
          flexShrink: 0,
          filter: "drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.10))"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="117" height="104" viewBox="0 0 117 104" fill="none">
          <g filter="url(#filter0_d_10737_1571)">
            <rect x="40.7422" y="40" width="36.2681" height="24" rx="5" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_10737_1571" x="0.742188" y="0" width="116.266" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="20"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10737_1571"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10737_1571" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      {/* master */}
      <div
        style={{
          width: "23.288px",
          height: "13.807px",
          flexShrink: 0,
          marginTop: "-16px"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.6548 14.0325C20.5554 14.0325 23.7175 10.942 23.7175 7.12955C23.7175 3.31713 20.5554 0.226562 16.6548 0.226562C14.9065 0.226562 13.3067 0.847376 12.0733 1.87575C10.8401 0.847632 9.24041 0.22699 7.49242 0.22699C3.59178 0.22699 0.429688 3.31756 0.429688 7.12997C0.429688 10.9424 3.59178 14.033 7.49242 14.033C9.24065 14.033 10.8405 13.4121 12.0738 12.3838C13.3071 13.4119 14.9068 14.0325 16.6548 14.0325Z" fill="#ED0006"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.0703 12.3845C13.5896 11.1183 14.553 9.23391 14.553 7.12955C14.553 5.02518 13.5896 3.14074 12.0703 1.8746C13.3035 0.846915 14.9028 0.226562 16.6504 0.226562C20.551 0.226562 23.7131 3.31713 23.7131 7.12955C23.7131 10.942 20.551 14.0325 16.6504 14.0325C14.9028 14.0325 13.3035 13.4122 12.0703 12.3845Z" fill="#F9A000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.0675 12.383C13.5861 11.1169 14.5491 9.23286 14.5491 7.12901C14.5491 5.02516 13.5861 3.14114 12.0675 1.875C10.5489 3.14114 9.58594 5.02517 9.58594 7.12902C9.58594 9.23287 10.5489 11.1169 12.0675 12.383Z" fill="#FF5E00"/>
        </svg>
      </div>
    </div>

</div>

{/* Master Card 3 */}
<div
  style={{
    height: "106px",
    flex: "1 0 0",
    display: "flex",
    alignItems: "center",
    position: "relative"
  }}
>
  {/* MCD3 */}
  <div
    style={{
      width: "190.667px",
      height: "106px",
      flexShrink: 0,
      position: "relative"
    }}
  >
    {/* B3 */}
    <div
      style={{
        width: "190.667px",
        height: "106px",
        flexShrink: 0,
        borderRadius: "8px",
        border: "1px solid #D8E0E9",
        background: "#FFF"
      }}
    >
      {/* B3 content goes here */}
    </div>
    {/* Group 158-3 */}
    <div
      style={{
        width: "140.928px",
        height: "42px",
        flexShrink: 0,
        position: "absolute",
        left: "16px",
        bottom: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <span
        style={{
          width: "140.928px",
          color: "#4B566B",
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "150%"
        }}
      >
        **** **** **** 4765
      </span>
      <span
        style={{
          width: "124.348px",
          color: "#4B566B",
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "150%"
        }}
      >
        Faisal Mohammed
      </span>
    </div>
  </div>

  {/* Visa */}
    <div
      style={{
        width: "36.268px",
        height: "24px",
        flexShrink: 0,
        position: "absolute",
        top: "16px",
        left: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {/* SVG-VISA */}
      <div
        style={{
          width: "36.268px",
          height: "24px",
          flexShrink: 0,
          filter: "drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.10))"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="117" height="104" viewBox="0 0 117 104" fill="none">
          <g filter="url(#filter0_d_10705_1599)">
            <rect x="40.4141" y="40" width="36.2681" height="24" rx="5" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_10705_1599" x="0.414062" y="0" width="116.266" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="20"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10705_1599"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10705_1599" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div
        style={{
          width: "25.385px",
          height: "7.819px",
          flexShrink: 0,
          fill: "#172B85",
          marginTop: "-14px"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="9" viewBox="0 0 26 9" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.4175 8.25834H4.22036L2.57277 2.19247C2.49456 1.91344 2.32852 1.66676 2.08427 1.5505C1.47473 1.25832 0.803051 1.0258 0.0703125 0.908524V0.674988H3.60974C4.09823 0.674988 4.4646 1.0258 4.52566 1.43322L5.38053 5.80874L7.5766 0.674988H9.71268L6.4175 8.25834ZM10.9323 8.25834H8.8573L10.566 0.674988H12.641L10.9323 8.25834ZM15.3298 2.77571C15.3908 2.36728 15.7572 2.13374 16.1846 2.13374C16.8563 2.0751 17.588 2.19238 18.1986 2.48354L18.565 0.85081C17.9543 0.617274 17.2827 0.5 16.6731 0.5C14.6592 0.5 13.1937 1.55041 13.1937 3.00824C13.1937 4.11728 14.2317 4.69961 14.9645 5.05042C15.7572 5.40021 16.0625 5.63375 16.0014 5.98355C16.0014 6.50825 15.3908 6.74178 14.7813 6.74178C14.0485 6.74178 13.3158 6.56688 12.6452 6.27471L12.2788 7.90845C13.0116 8.19961 13.8043 8.31689 14.537 8.31689C16.7952 8.37451 18.1986 7.32512 18.1986 5.75001C18.1986 3.76647 15.3298 3.65021 15.3298 2.77571ZM25.4549 8.25834L23.8074 0.674988H22.0376C21.6713 0.674988 21.3049 0.908524 21.1828 1.25832L18.1319 8.25834H20.2679L20.6943 7.15031H23.3189L23.5631 8.25834H25.4549ZM22.3472 2.71722L22.9568 5.57526H21.2481L22.3472 2.71722Z" fill="#172B85"/>
        </svg>
      </div>
    </div>

</div>

      </div>

        {/* Frame 1000007798 */}
  <div
    style={{
      display: "flex",
      padding: "16px 0px",
      alignItems: "center",
      gap: "16px"
    }}
  >
    <div
      style={{
        width: "24px",
        height: "24px"
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M8.5 12H16.5M12.5 8V16M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span
      style={{
        color: "#8E8E93",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      Add payment method
    </span>
  </div>
    </div>
  </div>

  {/* Add payment method section */}
<div
  style={{
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
    alignSelf: "stretch",
    borderRadius: "8px",
    background: "#FFF"
  }}
>
  {/* Frame 1000007819 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px",
      alignSelf: "stretch"
    }}
  >
    <span
      style={{
        alignSelf: "stretch",
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      Card Number
    </span>
    {/* Frame 1000007818 */}
    <div
      style={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        borderRadius: "8px",
        border: "1px solid #DBDADE"
      }}
    >
      <span
        style={{
          color: "#8E8E93",
          fontFamily: "Open Sans",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal"
        }}
      >
        1234 5678 9012 3456
      </span>
    </div>
  </div>
  {/* Frame 1000007823 */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "16px",
    alignSelf: "stretch"
  }}
>
  {/* Frame 1000007820 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "24px",
      flex: "1 0 0"
    }}
  >
    <span
      style={{
        alignSelf: "stretch",
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      Exp. Date
    </span>
    {/* Frame 1000007818 */}
    <div
      style={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        borderRadius: "8px",
        border: "1px solid #DBDADE"
      }}
    >
      <span
        style={{
          color: "#8E8E93",
          fontFamily: "Open Sans",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal"
        }}
      >
        MM / YY
      </span>
    </div>
  </div>
  {/* ...other content for Frame 1000007823 if needed... */}
    {/* Frame 1000007821 */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "24px",
      flex: "1 0 0"
    }}
  >
    <span
      style={{
        alignSelf: "stretch",
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      CVC / CVV
    </span>
    {/* Frame 1000007818 */}
    <div
      style={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        borderRadius: "8px",
        border: "1px solid #DBDADE"
      }}
    >
      <span
        style={{
          color: "#8E8E93",
          fontFamily: "Open Sans",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal"
        }}
      >
        CVC
      </span>
    </div>
  </div>
</div>

{/* Frame 1000007822 */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "24px",
    alignSelf: "stretch"
  }}
>
  <span
    style={{
      alignSelf: "stretch",
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal"
    }}
  >
    Name on Card
  </span>
  {/* Frame 1000007818 */}
  <div
    style={{
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "10px",
      alignSelf: "stretch",
      borderRadius: "8px",
      border: "1px solid #DBDADE"
    }}
  >
    <span
      style={{
        color: "#8E8E93",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      Name on Card
    </span>
  </div>
  {/* BTTN */}
  <div
    style={{
      display: "flex",
      width: "154px",
      height: "44px",
      padding: "10px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "8px",
      background: "#008080"
    }}
  >
    <button
      style={{
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Open Sans",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "140%",
        background: "none",
        border: "none",
        cursor: "pointer",
        width: "100%",
        height: "100%"
      }}
    >
      Save Changes
    </button>
  </div>
</div>
</div>
  
  </div>
  </div>

  {/* Frame 1000007808 */}
<div
  style={{
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    alignSelf: "stretch",
    borderRadius: "8px",
    background: "#FFF"
  }}
>
  {/* Frame 1000007808 content goes here */}
   {/* Frame 1000007805 */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}
  >
    <span
      style={{
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal"
      }}
    >
      Order Details
    </span>
    <span
      style={{
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      (1 Course) :
    </span>
  </div>
  {/* ...other Frame 1000007808 content goes here... */}
  {/* Frame 1000007807 */}
  <div
    style={{
      display: "flex",
      padding: "20px",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
      background: "#FFF"
    }}
  >
    {/* Frame 1000007806 */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "19px"
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "63px",
          height: "54px",
          borderRadius: "8px 8px 0px 0px",
          background: "url(assets/img/about/about/C1.png) lightgray 50% / cover no-repeat"
        }}
      />
      {/* Title */}
      <span
        style={{
          width: "246px",
          color: "#1A1A1A",
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "22px"
        }}
      >
        Revolutionizing Procurement with Digital Tools
      </span>
    </div>
    {/* ...other content for Frame 1000007807 if needed... */}
      {/* 1000 Credits */}
  <span
    style={{
      color: "#1A1A1A",
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "22px"
    }}
  >
    1000 Credits
  </span>
  </div>
  {/* ...other Frame 1000007808 content goes here... */}
</div>

  </div>
    </div>

    {/* Frame 1000007850 */}
  <div
    style={{
      display: "flex",
      width: "427px",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "32px",
      flexShrink: 0
    }}
  >
    {/* Frame 1000007813 */}
    <div
      style={{
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "64px",
        alignSelf: "stretch"
      }}
    >
      {/* Frame 1000007812 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch"
        }}
      >
        {/* right side */}
        <div
          style={{
            height: "30px",
            alignSelf: "stretch"
          }}
        >
                {/* Order Summary */}
          <span
            style={{
              width: "387px",
              color: "#0E1530",
              fontFamily: "Open Sans",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "150%"
            }}
          >
            Order Summary
          </span>
          {/* BG */}
          <div
            style={{
              width: "749.032px",
              height: "701px",
              flexShrink: 0,
              borderRadius: "10px",
              background: "#FFF",
              boxShadow: "0px 1px 3px 0px rgba(3, 0, 71, 0.09)"
            }}
          ></div>
   
        </div>

         {/* Frame 1000007811 */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
    alignSelf: "stretch"
  }}
>
  {/* subtotal-1 */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      alignSelf: "stretch"
    }}
  >
    <span
      style={{
        color: "#1A1A1A",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
      }}
    >
      Original Price
    </span>
    <span
      style={{
        color: "#2B3445",
        textAlign: "right",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "150%"
      }}
    >
      1000 Credits
    </span>
  </div>
  {/* subtotal-2 */}
  <div
    style={{
      display: "flex",
      height: "19.973px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      alignSelf: "stretch"
    }}
  >
    <span
      style={{
        color: "#2B3445",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "150%"
      }}
    >
      Total (1 Course):
    </span>
    <span
      style={{
        color: "#2B3445",
        textAlign: "right",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "150%"
      }}
    >
      1000
    </span>
  </div>
</div>
      </div>


      {/* BTN */}
<div
  style={{
    display: "flex",
    padding: "13px 22px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    borderRadius: "4px",
    border: "1px solid #828282"
  }}
>
  <button
    style={{
      color: "#828282",
      textAlign: "center",
      fontFamily: "Open Sans",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "26px",
      background: "none",
      border: "none",
      cursor: "pointer",
      width: "100%"
    }}
  >
    Purchase & Enroll
  </button>
</div>
    </div>
  </div>

</div>
    </div>

   )
}




// const InputField = ({ col = '12', label, placeholder, required, type = "text" }: { col?: string, label?: string, placeholder?: string, required?: boolean, type?: string }) => (
//    <div className={`col-md-${col}`}>
//       <div className="tp-checkout-input">
//          {label && <label>{label} {required && <span>*</span>}</label>}
//          <input type={type} placeholder={placeholder || label} required={required} />
//       </div>
//    </div>
// );

// const SelectField = ({ label, options, onChange }: { label: string, options: { value: string, label: string }[], onChange: (item: { value: string, label: string }) => void }) => (
//    <div className="col-md-6">
//       <div className="tp-checkout-input">
//          <label>{label}</label>
//          <NiceSelect
//             options={[{ value: '', label: 'Select Country' }, ...options]}
//             defaultCurrent={0}
//             onChange={onChange}
//             name="Country"
//          />
//       </div>
//    </div>
// );

// const CheckboxOption = ({ id, label }: { id: string, label: string }) => (
//    <div className="tp-checkout-option">
//       <input id={id} type="checkbox" />
//       <label htmlFor={id}>{label}</label>
//    </div>
// );

// const TextAreaField = ({ label, placeholder }: { label: string, placeholder: string }) => (
//    <div className="col-md-12">
//       <div className="tp-checkout-input">
//          <label>{label}</label>
//          <textarea placeholder={placeholder}></textarea>
//       </div>
//    </div>
// );