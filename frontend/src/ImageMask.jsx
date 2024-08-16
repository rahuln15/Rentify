// // ImageMask.js
// import React from 'react';
// import './ImageMask.css'; // Import the external CSS file
// import sofaimage from './test.jpg'



// const ImageMask = () => {
//     return (
        

//         <div className="container1">
        
//             <img
//                 className="clip-mask"
//                 src={sofaimage}
//                 alt="Decorative"
//             />
//             <div className="content">
//             <div className='content-up'>

//             <div className='btn'>
//         <button>
//         <div className='dot'></div>
//         <div className='dot1'>Rent</div>
//         </button>
//         <button><div className='dot'></div><div className='dot1'>Purchase</div></button>
//         <button><div className='dot'></div><div className='dot1'>Interior</div></button>
//     </div>
            
//                 <div className="upper">
//                     <h2>
//                         Elevating your home with <span> uniquely fascinating furniture</span>
                       
//                     </h2>
//                     <div className='upper-sep'></div>
//                     <div className='Subtitle'>Discover, Explore, Inspire: Fascinate Your World</div>
//                 </div>
//             </div>
           

//                 <div className="lower">
//                     <h2>
//                         Rent the perfect furniture for your home to elevate your living space.
//                     </h2>
//                 <div className='lower-circle'>
//                 <i class="ri-arrow-right-down-line"></i>
//                 </div>
//                 </div>
//             </div>
            
//         </div>
        
//     );
// };

// export default ImageMask;


import React from 'react';
import './ImageMask.css'; // Import the external CSS file
import sofaimage from './banner.png';

const ImageMask = () => {
    return (
        <div>

        <div className="container1">
         
            <div className='banner-img'>

            <img
                className="clip-mask"
                src={sofaimage}
                alt="Decorative"
            />
            </div>
            
            {/* Content Overlay */}
            <div className="content">
                <div className='content-up'>
                    <div className='btn'>
                        <button>
                            <div className='dot'></div>
                            <div className='dot1'>Rent</div>
                        </button>
                        <button><div className='dot'></div><div className='dot1'>Purchase</div></button>
                        <button><div className='dot'></div><div className='dot1'>Interior</div></button>
                    </div>
                    <div className="upper">
                        <h2>Elevating your home with <span>uniquely fascinating furniture.</span></h2>
                        <div className='upper-sep'></div>
                        <div className='Subtitle'>Discover, Explore, Inspire: Fascinate Your World</div>
                    </div>
                </div>
                <div className="lower">
                    <h2>Rent the perfect furniture for your home to elevate your living space.</h2>
                    <div className='lower-circle'>
                        <i className="ri-arrow-right-down-line"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className='fullbanner'>
            hii
        </div>
        </div>
    );
};

export default ImageMask;
