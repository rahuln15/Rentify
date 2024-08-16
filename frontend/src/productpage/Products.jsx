// import React from "react";
// import "../productpage/Products.css";
// import RangeSlider from "./RangeSlider";
// import { Link } from "react-router-dom";
// import chair2 from '../page7/chair2.png'
// import chair3 from '../page7/chair3.png'
// import chair4 from '../page7/chair4.png'



// const Products = () => {
//   const cards = [
//     {
//       id: 1,
//       name: 'Sakarias Armchair',
//       price: '392 / Month',
//       rating: 5,
//       imgSrc: `${chair2}`, // Replace with the correct path
//     },
//     {
//       id: 2,
//       name: 'Baltsar Chair',
//       price: '299 / Month',
//       rating: 5,
//       imgSrc: `${chair2}`, // Replace with the correct path
//     },
//     {
//       id: 3,
//       name: 'Anjay Chair',
//       price: '519 / Month',
//       rating: 5,
//       imgSrc: `${chair3}`, // Replace with the correct path
//     },
//     {
//       id: 4,
//       name: 'Nyantuy Chair',
//       price: '921 / Month',
//       rating: 5,
//       imgSrc: `${chair4}`, // Replace with the correct path
//     },
//     {
//       id: 1,
//       name: 'Sakarias Armchair',
//       price: '392 / Month',
//       rating: 5,
//       imgSrc: `${chair2}`, // Replace with the correct path
//     },
//     {
//       id: 2,
//       name: 'Baltsar Chair',
//       price: '299 / Month',
//       rating: 5,
//       imgSrc: `${chair2}`, // Replace with the correct path
//     },
//     {
//       id: 3,
//       name: 'Anjay Chair',
//       price: '519 / Month',
//       rating: 5,
//       imgSrc: `${chair3}`, // Replace with the correct path
//     },
//     {
//       id: 4,
//       name: 'Nyantuy Chair',
//       price: '921 / Month',
//       rating: 5,
//       imgSrc: `${chair4}`, // Replace with the correct path
//     },
//   ];
//   return (
//     <div>
//       <div className="productpage">
//         <div className="productpage-left">
//           <div className="productpage-left-sidebar">
//             <RangeSlider/>
          


//             <div className="productpage-left-sidebar-filters">
//               <div className="filter-title">
//                 Filter by Price
//               </div>
//               <div className="checkboxes">
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Under ₹500</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">₹500 - ₹999</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">₹1000 - ₹1999</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">₹2000 - ₹3999</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">₹4000 - ₹4999</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Over ₹5000</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//               </div>
//             </div>
//             <div className="productpage-left-sidebar-filters">
//               <div className="filter-title">
//               Filter by Categories
//               </div>
//               <div className="checkboxes">
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Furniture</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Lighting</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Decor</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Vases</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Accessories</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Sale</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//               </div>
//             </div>
//             <div className="productpage-left-sidebar-filters">
//               <div className="filter-title">
//               Filter by Color
//               </div>
//               <div className="checkboxes">
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">White</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Black</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Grey</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Brown</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Blue</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Green</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//               </div>
//             </div>
//             <div className="productpage-left-sidebar-filters">
//               <div className="filter-title">
//               Filter by Material
//               </div>
//               <div className="checkboxes">
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Leather</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Marble</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Metal</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Wood</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//                 <div className="checkbox">
//                   <div className="checkbox-grp">
//                     <input type="checkbox" id="price-low" name="price-low" />
//                     <label for="price-low">Leatherette</label>
//                   </div>
//                   <span>20</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="productpage-right">
//           <div className="topsection">
//             <p>Showing 1-12 of 14results</p>
//             <div class="custom-select">
//               <select>
//                 <option value="latest">Sort by Latest</option>
//                 <option value="oldest">Sort by Oldest</option>
//               </select>
//             </div>
//           </div>
//           <div className=" productpage-right-card-grid">
//       {cards.map(card => (
//         <Link to={'/productdetail'} className="card text-decoration-none" key={card.id}>
//         <div className='card-img'>

//           <img  src={card.imgSrc} alt={card.name} />
//         </div>
//         <div className='cardddd'>

//           <div className='card-sqr'></div>
//           <div className="card-details">
//             <span className="card-category">Chair</span>
//             <h3 className="card-name">{card.name}</h3>
//             <div className="card-rating">
//               {'★'.repeat(card.rating)}
//             </div>
//             <div className='price-cont'>

//             <p className="card-price"><span>₹</span>{card.price}</p>
//             <button className="card-add-button">+</button>
//             </div>
//           </div>
//         </div>
//         </Link>
//       ))}
//     </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../productpage/Products.css";
import RangeSlider from "./RangeSlider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

   const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products);
  

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('https://rentify-arx4.onrender.com/api/products/');
  //       console.log(response.data.data);
        
  //       setProducts(response.data.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError('Failed to fetch products');
  //       setLoading(false);
  //     }
  //   };
    
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
  // console.log(products.reviews[0].rating);
  return (
    <div>
      <div className="productpage">
        <div className="productpage-left">
          <div className="productpage-left-sidebar">
            <RangeSlider />
            {/* Add filters and other sidebar content here */}
            
             <div className="productpage-left-sidebar-filters">
               <div className="filter-title">
                 Filter by Price
               </div>
               <div className="checkboxes">
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Under ₹500</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">₹500 - ₹999</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">₹1000 - ₹1999</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">₹2000 - ₹3999</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">₹4000 - ₹4999</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Over ₹5000</label>
                   </div>
                   <span>20</span>
                 </div>
               </div>
             </div>
             <div className="productpage-left-sidebar-filters">
               <div className="filter-title">
               Filter by Categories
               </div>
              <div className="checkboxes">
              <div className="checkbox">
                   <div className="checkbox-grp">
                   <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Furniture</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Lighting</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Decor</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Vases</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Accessories</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Sale</label>
                   </div>
                   <span>20</span>
                 </div>
               </div>
             </div>
             <div className="productpage-left-sidebar-filters">
               <div className="filter-title">
               Filter by Color
               </div>
               <div className="checkboxes">
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">White</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Black</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Grey</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Brown</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Blue</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Green</label>
                   </div>
                   <span>20</span>
                 </div>
               </div>
             </div>
             <div className="productpage-left-sidebar-filters">
               <div className="filter-title">
               Filter by Material
               </div>
               <div className="checkboxes">
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Leather</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Marble</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Metal</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Wood</label>
                   </div>
                   <span>20</span>
                 </div>
                 <div className="checkbox">
                   <div className="checkbox-grp">
                     <input type="checkbox" id="price-low" name="price-low" />
                     <label for="price-low">Leatherette</label>
                   </div>
                   <span>20</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="productpage-right">
          <div className="topsection">
            <p>Showing 1-{products.length} of {products.length} results</p>
            <div className="custom-select">
              <select>
                <option value="latest">Sort by Latest</option>
                <option value="oldest">Sort by Oldest</option>
              </select>
            </div>
          </div>
          <div className="productpage-right-card-grid">
            {/* {products.map(product => (
              <Link to={`/productdetail/${product._id}`} className="card text-decoration-none" key={product._id}>
                <div className='card-img'>
                  <img src={product.img} alt={product.title} />
                </div>
                <div className='cardddd'>
                  <div className='card-sqr'></div>
                  <div className="card-details">
                    <span className="card-category">{product.category}</span>
                    <h3 className="card-name">{product.title}</h3>
                    <div className="card-rating">
                      {'★'.repeat(product.reviews.rating)}
                    </div>
                    <div className='price-cont'>
                      <p className="card-price"><span>₹</span>{product.price}</p>
                      <button className="card-add-button">+</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))} */}
            {products.map(product => {
  // Calculate average rating
  const ratings = product.reviews.map(review => review.rating);
  const averageRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 'No Ratings';

  return (
    <Link to={`/productdetail/${product._id}`} className="card text-decoration-none" key={product._id}>
      <div className='card-img'>
        <img src={product.img} alt={product.title} />
      </div>
      <div className='cardddd'>
        <div className='card-sqr'></div>
        <div className="card-details">
          <span className="card-category">{product.category}</span>
          <h3 className="card-name">{product.title}</h3>
          <div className="card-rating">
            {averageRating === 'No Ratings' ? averageRating : '★'.repeat(Math.round(averageRating))}
          </div>
          <div className='price-cont'>
            <p className="card-price"><span>₹</span>{product.price}</p>
            <button className="card-add-button">+</button>
          </div>
        </div>
      </div>
    </Link>
  );
})}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
