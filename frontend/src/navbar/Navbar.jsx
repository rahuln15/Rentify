import React, { useState } from 'react'
import logo from '../navbar/Logo.png'
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart,FaChevronDown } from 'react-icons/fa';
import { MdShoppingBag } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [activeLink, setActiveLink] = useState('');
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <div className='mainnavbar'>





        <div className='upnavbar'>
          <div className='leftnav'>
            <div className='logo'>
              <img src={logo} alt="" />
            </div>
            <div className='leftnav-searchbar'>
            <FaSearch className="search-icon"  />
      <input
        type="text"
        placeholder="Search Product"
        className="search-input"
        
      />

            </div>
          </div>


          <div className='rightnav'>
            <div className='buygroup'>
              <div className='buy'>Buy</div>
              <div className='buy-right'></div>
            </div>
            <div className='buygroup'>
              <div className='buy'>Rent</div>
              <div className='buy-right'></div>
            </div>
            <div className='rightnav-heart'>
            <FaRegHeart className='heart-icon'/>
            </div>
            <div className='cartgroup'>

            <div className='rightnav-cart'>
            <MdShoppingBag/>
            </div>
            <div className='rightnav-cartcount'>CART(1)</div>
            </div>
            {/* <Link to={'/signup'}>Login</Link> */}
            {user ? (
            <button className='border border-none' onClick={handleLogout}>{user.name}</button>
          ) : (
            <Link to='/login'>Login</Link>
          )}
          </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* <hr className='line-56' /> */}
        <div className='line-56'></div>
        
        
        
        
        
        
        
        
        
        
        
       


        <div className='bottomnav'>
      <div className='bottomnav-left'>
        <Link 
          to="/" 
          className={`text-decoration-none ${activeLink === 'home' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('home')}
        >
          <div className='home'>Home</div>
        </Link>

        <Link 
          to="/products" 
          className={`bottomnav-left-products text-decoration-none ${activeLink === 'products' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('products')}
        >
          <select className='bottomnav-left-products'>
            <option value="" className='option-group'>Products</option>
            <option value="1">1</option>
          </select>
        </Link>

        <select 
          className={`bottomnav-left-products ${activeLink === 'catalog' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('catalog')}
        >
          <option value="">Catalog</option>
          <option value="1">1</option>
        </select>

        <select 
          className={`bottomnav-left-products ${activeLink === 'popular' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('popular')}
        >
          <option value="">Popular Items</option>
          <option value="1">1</option>
        </select>

        <div 
          className={activeLink === 'rent' ? 'active' : ''} 
          onClick={() => handleLinkClick('rent')}
        >
          <span className='renttt'>Rent Furniture</span>
        </div>
      </div>

      <div className='bottomnav-right'>
        <div 
          className={activeLink === 'shipping' ? 'active' : ''} 
          onClick={() => handleLinkClick('shipping')}
        >
          <span className='renttt'>Shipping</span>
        </div>
        <div 
          className={activeLink === 'returns' ? 'active' : ''} 
          onClick={() => handleLinkClick('returns')}
        >
          <span className='renttt'>Returns</span>
        </div>
        <div 
          className={activeLink === 'faqs' ? 'active' : ''} 
          onClick={() => handleLinkClick('faqs')}
        >
         <span className='renttt'> FAQs</span>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar