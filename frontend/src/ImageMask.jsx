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
        <div className="container1">
            {/* SVG for Clip Path */}
            {/* <svg width="0" height="0">
                <defs>
                    <clipPath id="roundedClip" patternContentUnits="objectBoundingBox" width="1" height="1">
                    
                        <path d="M46.7673 835.922C22.4363 835.922 2.64034 815.771 2.64034 790.823V370.063C2.64034 345.116 22.4363 324.964 46.7673 324.964H861.038C887.687 324.964 909.217 302.919 909.217 275.813V47.7564C909.217 22.8089 929.013 2.65743 953.344 2.65743H1334.55H1717.07C1741.4 2.65743 1761.19 22.8089 1761.19 47.7564V563.052C1761.19 587.999 1741.4 608.151 1717.07 608.151L1171.15 608.531C1144.5 608.531 1122.97 630.577 1122.97 657.683V790.823C1122.97 815.771 1103.18 835.922 1078.84 835.922H46.7673Z" />
                    </clipPath>
                </defs>
            </svg> */}


           

            {/* Image with Clip Path Applied */}
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
    );
};

export default ImageMask;
