// import React, { useEffect, useState } from "react";
// import singleimg from "../productdetails/singleimg.png";
// import img1 from "../productdetails/img1.png";
// import img2 from "../productdetails/img2.png";
// import img3 from "../productdetails/img3.png";
// import img4 from "../productdetails/img4.png";
// import "../productdetails/Productdetails.css";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductById } from "../features/productSlice";

// const Productdetails = () => {
//   const [selectedMonth, setSelectedMonth] = useState(0);
//   const [selectedSeat, setSelectedSeat] = useState(0);
//   const [selectedConfig, setSelectedConfig] = useState(0);
//   const [selectedColor, setSelectedColor] = useState(0);


//   const {id} = useParams()
//   const dispatch = useDispatch();
//   const { product, loading, error } = useSelector((state) => state.products);
  
  
//   console.log(product.title);
//   // console.log(id);
  
  
//   useEffect(() => {
//     // console.log(id);
    
//     dispatch(fetchProductById(id)); 
//     console.log(product);
//   }, [dispatch, id]);
  
  
  

//     const handleClick = (index) => {
      
//       setSelectedMonth(index);
        
//     };
//     const handleClick1 = (index) => {
//         setSelectedSeat(index);
//     };
//     const handleClick2 = (index) => {
//         setSelectedConfig(index);
//     };
//     const handleClick3 = (index) => {
//         setSelectedColor(index);
//     };
//     const months = ['2 Mon', '6 Mon', '8 Mon', '10 Mon', '12 Mon'];
//     const seating = ['4', '3', '2', '1'];
//     const config = ['2 Seater', '1 Seater', '3 Seater'];
//     const color = ['Green', 'Red', 'White'];
//   return (
//     <div className="productdetails">
//       <div className="productdetails-left">
//         <div className="productdetails-left-up">
//           <div className="Product-Images-Container">
//             <div className="fourimg">
//               <div>
//                 <img src={img1} alt="" />
//               </div>
//               <div>
//                 <img src={img2} alt="" />
//               </div>
//               <div>
//                 <img src={img3} alt="" />
//               </div>
//               <div>
//                 <img src={img4} alt="" />
//               </div>
//             </div>
//             <div className="singleimg">
//               <img src={product.img} alt="" />
//             </div>
//           </div>
//         </div>

//         <hr className="Separator" />

//         <div className="productdetails-left-down">
//           <div className="Main-Title">{product.title}</div>
//           <div className="Description-Container">
//             Introducing the Riverbend Canoe Company, established by Evelyn
//             Rivers in 1935. Rivers had gained experience at the River Run Canoe
//             Co from 1918 to 1930. Production of the iconic wooden canoes in
//             Riverside, Illinois came to an end in 1985.
//           </div>
//           <div className="Fabric">
//             <div className="Section-Title">Fabric + Care</div>
//             <div className="Fabric-Details">
//               <div className="Info-Row">Material: Soft wool blend</div>
//               <div className="Info-Row">Color: Various</div>
//             </div>
//           </div>

//           <div className="Fabric">
//             <div className="Section-Title">Wood Type</div>
//             <div className="Fabric-Details">
//               <div className="Info-Row">Material: Sandalwood</div>
//               <div className="Info-Row">Color: Brownish</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="productdetails-right">
//         <div className="productdetails-right-1">
//           <div className="productdetails-right-1-1">
//             <i class="ri-star-fill"></i>
//             <span>4.9</span>
//             <span>.</span>
//             <span>149 reviews</span>
//           </div>
//           <div className="price-lg">
//             <h3>₹{product.price} / Month</h3>
//             <p>₹199.99</p>
//           </div>
//         </div>

//         <div className="productdetails-right-2">
//           <h5>Months</h5>
//           <div className="months">
           
//             {months.map((month, index) => (
//                     <div 
//                         key={index} 
//                         className={`month ${selectedMonth === index ? 'active' : ''}`} 
//                         onClick={() => handleClick(index)}
//                     >
//                         <div>{month}</div>
//                     </div>
//                 ))}
//           </div>
//         </div>

//         <div className="productdetails-right-3">
//           <div className="Quantity-Selector">
//             <div className="decrease-btn">
//               <i class="ri-subtract-line"></i>
//             </div>
//             <div className="current-quantity">
//               <div className="px16-medium">1</div>
//             </div>
//             <div className="increase-btn">
//               <i class="ri-add-line"></i>
//             </div>
//           </div>

//           <button className="cart-button">
//             <i class="ri-shopping-bag-line"></i>
//             <div className="Add-to-Cart-Button"> Add to cart</div>
//           </button>
//         </div>

//         <div className="productdetails-right-4">
//           <div className="subtotal">
//             <div className="subtotal-price">
//               <div className="Subtotal-Label">₹169.99 x 1 Month</div>
//               <div className="Subtotal-Amount">₹169.99</div>
//             </div>
//             <div className="tax">
//               <div className="Tax-Label">Tax estimate</div>
//               <div className="Tax-Amount">₹0</div>
//             </div>
//           </div>

//           <hr className="seperator" />

//           <div className="total">
//             <div className="Total-Label">
//               <h5>Total</h5>
//             </div>
//             <div className="Total-Amount">
//               <h5>₹169.99</h5>
//             </div>
//           </div>
//         </div>

//         <div className="productdetails-right-2">
//           <h5>Seating Capacity:</h5>
//           <div className="monthsbottom1">
//             {seating.map((month, index) => (
//                     <div 
//                         key={index} 
//                         className={`seat ${selectedSeat === index ? 'active' : ''}`} 
//                         onClick={() => handleClick1(index)}
//                     >
//                         <div>{month}</div>
//                     </div>
//                 ))}
//           </div>
//         </div>

//         <div className="productdetails-right-2">
//           <h5>Config Type:</h5>
//           <div className="monthsbottom2">
           
//             {config.map((month, index) => (
//                     <div 
//                         key={index} 
//                         className={`config ${selectedConfig === index ? 'active' : ''}`} 
//                         onClick={() => handleClick2(index)}
//                     >
//                         <div>{month}</div>
//                     </div>
//                 ))}
//           </div>
//         </div>

//         <div className="productdetails-right-2">
//           <h5>Color:</h5>
//           <div className="monthsbottom3 ">
           

//             {color.map((month, index) => (
//                     <div 
//                         key={index} 
//                         className={`color ${selectedColor === index ? 'active' : ''}`} 
//                         onClick={() => handleClick3(index)}
//                     >
//                         <div>{month}</div>
//                     </div>
//                 ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productdetails;



import React, { useEffect, useState } from "react";
import singleimg from "../productdetails/singleimg.png";
import img1 from "../productdetails/img1.png";
import img2 from "../productdetails/img2.png";
import img3 from "../productdetails/img3.png";
import img4 from "../productdetails/img4.png";
import "../productdetails/Productdetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/productSlice";

const Productdetails = () => {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);
  const [selectedSeatIndex, setSelectedSeatIndex] = useState(0);
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const {id} = useParams()
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);
  
  
  console.log(product.title);
  // console.log(id);
  
  
  useEffect(() => {
    // console.log(id);
    
    dispatch(fetchProductById(id)); 
    console.log(product);
  }, [dispatch, id]);


  const months = ['2 Mon', '6 Mon', '8 Mon', '10 Mon', '12 Mon'];
    const seating = ['4', '3', '2', '1'];
    const config = ['2 Seater', '1 Seater', '3 Seater'];
    const colors = ['Green', 'Red', 'White'];
  
  
  

    const handleMonthClick = (index) => {
      setSelectedMonthIndex(index);
    };
  
    const handleSeatClick = (index) => {
      setSelectedSeatIndex(index);
    };
  
    const handleConfigClick = (index) => {
      setSelectedConfigIndex(index);
    };
  
    const handleColorClick = (index) => {
      setSelectedColorIndex(index);
    };


    const selectedMonth = months[selectedMonthIndex];
    const selectedSeat = seating[selectedSeatIndex];
    const selectedConfig = config[selectedConfigIndex];
    const selectedColor = colors[selectedColorIndex];



  

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const selectedMonthValue = parseInt(months[selectedMonthIndex]);

  const totalAmount = product.price * quantity * selectedMonthValue;
  
  return (
    <div className="productdetails">
      <div className="productdetails-left">
        <div className="productdetails-left-up">
          <div className="Product-Images-Container">
            {/* <div className="fourimg">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <img src={img4} alt="" />
              </div>
            </div> */}
            <div className="fourimg">
            {[img1, img2, img3, img4].map((imgSrc, index) => (
              <div key={index}>
                <img src={imgSrc} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
            <div className="singleimg">
              <img src={product.img} alt="" />
            </div>
          </div>
        </div>

        <hr className="Separator" />

        <div className="productdetails-left-down">
          <div className="Main-Title">{product.title}</div>
          <div className="Description-Container">
            Introducing the Riverbend Canoe Company, established by Evelyn
            Rivers in 1935. Rivers had gained experience at the River Run Canoe
            Co from 1918 to 1930. Production of the iconic wooden canoes in
            Riverside, Illinois came to an end in 1985.
          </div>
          <div className="Fabric">
            <div className="Section-Title">Fabric + Care</div>
            <div className="Fabric-Details">
              <div className="Info-Row">Material: Soft wool blend</div>
              <div className="Info-Row">Color: Various</div>
            </div>
          </div>

          <div className="Fabric">
            <div className="Section-Title">Wood Type</div>
            <div className="Fabric-Details">
              <div className="Info-Row">Material: Sandalwood</div>
              <div className="Info-Row">Color: Brownish</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productdetails-right">
        <div className="productdetails-right-1">
          <div className="productdetails-right-1-1">
            <i class="ri-star-fill"></i>
            <span>4.9</span>
            <span>.</span>
            <span>149 reviews</span>
          </div>
          <div className="price-lg">
            <h3>₹{product.price} / Month</h3>
            <p>₹199.99</p>
          </div>
        </div>

        <div className="productdetails-right-2">
          <h5>Months</h5>
          <div className="months">
           
            {months.map((month, index) => (
                    <div 
                        key={index} 
                        className={`month ${selectedMonthIndex === index ? 'active' : ''}`} 
                        onClick={() => handleMonthClick(index)}
                    >
                        <div>{month}</div>
                    </div>
                ))}
          </div>
        </div>

        <div className="productdetails-right-3">
          <div className="Quantity-Selector">
            <div className="decrease-btn" onClick={decreaseQuantity}>
              <i class="ri-subtract-line"></i>
            </div>
            <div className="current-quantity">
              <div className="px16-medium">{quantity}</div>
            </div>
            <div className="increase-btn" onClick={increaseQuantity}>
              <i class="ri-add-line"></i>
            </div>
          </div>

          <button className="cart-button">
            <i class="ri-shopping-bag-line"></i>
            <div className="Add-to-Cart-Button"> Add to cart</div>
          </button>
        </div>

        <div className="productdetails-right-4">
          <div className="subtotal">
            <div className="subtotal-price">
              <div className="Subtotal-Label">₹{product.price} x {selectedMonthValue} Month</div>
              <div className="Subtotal-Amount">₹{totalAmount.toFixed(2)}</div>
            </div>
            <div className="tax">
              <div className="Tax-Label">Tax estimate</div>
              <div className="Tax-Amount">₹0</div>
            </div>
          </div>

          <hr className="seperator" />

          <div className="total">
            <div className="Total-Label">
              <h5>Total</h5>
            </div>
            <div className="Total-Amount">
              <h5>₹169.99</h5>
            </div>
          </div>
        </div>

        <div className="productdetails-right-2">
          <h5>Seating Capacity:</h5>
          <div className="monthsbottom1">
            {seating.map((month, index) => (
                    <div 
                        key={index} 
                        className={`seat ${selectedSeatIndex === index ? 'active' : ''}`} 
                        onClick={() => handleSeatClick(index)}
                    >
                        <div>{month}</div>
                    </div>
                ))}
          </div>
        </div>

        <div className="productdetails-right-2">
          <h5>Config Type:</h5>
          <div className="monthsbottom2">
           
            {config.map((month, index) => (
                    <div 
                        key={index} 
                        className={`config ${selectedConfigIndex === index ? 'active' : ''}`} 
                        onClick={() => handleConfigClick(index)}
                    >
                        <div>{month}</div>
                    </div>
                ))}
          </div>
        </div>

        <div className="productdetails-right-2">
          <h5>Color:</h5>
          <div className="monthsbottom3 ">
           

            {colors.map((month, index) => (
                    <div 
                        key={index} 
                        className={`color ${selectedColorIndex === index ? 'active' : ''}`} 
                        onClick={() => handleColorClick(index)}
                    >
                        <div>{month}</div>
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;



