// import React from 'react';
// import { Link } from 'react-router-dom';
// import Usefatch from '../ProductData/getProduct';
// import styleAllProduct from './AllProducts.module.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';

// export default function AllProducts() {
//   const products = Usefatch(); // Assuming this fetches your JSON data

//   return (
//     <>
//       <div className={styleAllProduct.allPage}>
//         {/* <h1 >All Products</h1> */}
//         {products.map((category, index) => (
//           <div key={index}>
//             <h2 className={styleAllProduct.category}>{category.category}</h2>
//             {category.subcategories.map((subcategory, subIndex) => (
//               <div className={styleAllProduct.productEle} key={subIndex}>
//                 {/* <h3>{subcategory.name}</h3> */}
//                 {subcategory.items.map((item) => (
//                   <div className={styleAllProduct.productItem} key={item.id}>
//                      <img src={item.image} alt="" />
//                     <h4>{item.name}</h4>
//                     <p>Brand: {item.brand}</p>
//                     <p>Price: <span style={{ color: 'green' }}>${item.price}</span></p>
//                     <p>{item.description}</p>
//                     <button className={styleAllProduct.btnDetails} >
//                     <i class="fa-solid fa-right-long" style={{ color: '#fff', fontSize: '20px' }}></i>
//                       <Link to={`/product/${item.id}`} className={styleAllProduct.Details}>Details</Link>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import UseFetch from '../ProductData/getProduct';
import styleAllProduct from './AllProducts.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function AllProducts() {
    const products = UseFetch();

    return (
        <div className={styleAllProduct.allPage}>
            <div className={styleAllProduct.productEle}>
                {
                    products.map((item) => (
                        <div className={styleAllProduct.productItem} key={item.id}>
                            <div className={styleAllProduct.imgSec}>
                                <img
                                    src={item.image[0]}
                                    alt={item.name}
                                    className={styleAllProduct.productImage}
                                />
                            </div>

                            <h4>{item.name}</h4>
                            <p>Brand: {item.brand}</p>
                            <p>Category: {item.category}</p>
                            <p>
                                Price: <span style={{ color: 'green' }}>${item.price}</span>
                            </p>
                            <p>{item.description}</p>

                            {/* Details Button */}
                            <button className={styleAllProduct.btnDetails}>
                                <i
                                    className="fa-solid fa-right-long"
                                    style={{ color: '#fff', fontSize: '20px', marginRight: '5px' }}
                                ></i>
                                <Link to={`/product/${item.id}`} className={styleAllProduct.Details}>
                                    Details
                                </Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
