import React, { useRef } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import styleHome from "./Home.module.css"
import Usefatch from '../ProductData/getProduct';
import { Link } from 'react-router-dom';
import scrollProduct from './ScrollProducts.module.css'

export default function Home() {
    const products = Usefatch(); // Assuming this fetches your JSON data
    const scrollRef = useRef(null); // Reference to the scroll container

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // Adjust the value to control the scroll distance
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300, // Adjust the value to control the scroll distance
            behavior: 'smooth',
        });
    };
    return (
        <>

            <div className={styleHome.homeStyling}>

                <div className={styleHome.home}>

                    <div className={styleHome.leftSide}>
                        <h1 className={styleHome.name}>
                            PlayStation VR Mega <br />
                            Pack Bundle 3
                        </h1>

                        <p className={styleHome.dec}>
                            there are many variations passages of available, but <br />
                            the majority have suffered alteration some form, by injected humour
                        </p>

                        <button className={styleHome.btnShop}><Link className={styleHome.shop} to={'/product'}>shop now</Link></button>
                    </div>

                    <div className={styleHome.rightSide}>
                        <img src="/image/home.png" alt="" />
                    </div>
                </div>

                <div className={styleHome.supportSide}>
                    <div className={styleHome.supportEle}>
                        <i class="fa-solid fa-lock"></i>
                        <h5>100% payment<br />secured</h5>
                    </div>
                    <div className={styleHome.supportEle}>
                        <i class="fa-solid fa-window-restore"></i>
                        <h5>support lota <br />of payment</h5>
                    </div>
                    <div className={styleHome.supportEle}>
                        <i class="fa-solid fa-headphones-simple"></i>
                        <h5>24hours/7day <br />support</h5>
                    </div>
                    <div className={styleHome.supportEle}>
                        <i class="fa-solid fa-truck"></i>
                        <h5>free delivery<br /> with 50$</h5>
                    </div>
                    <div className={styleHome.supportEle}>
                        <i class="fa-solid fa-tag"></i>
                        <h5>best price<br /> guaranteed</h5>
                    </div>
                    <div className={styleHome.supportEle}>
                        <i class="fa-brands fa-android"></i>
                        <h5>mobile  apps<br /> ready</h5>
                    </div>

                </div>

                <div className={scrollProduct.allProductsContainer}>
                    
                    <div className={scrollProduct.productsScroll} ref={scrollRef}>
                        {products.slice(0, 7).map((item) => (
                            <div key={item.id} className={scrollProduct.productCard}>
                                <img className={scrollProduct.imgy} src={item.image[0]} alt={item.name} />
                                <h3 className={scrollProduct.names}>{item.name}</h3>
                                <p>Brand: {item.brand}</p>
                                <p>
                                    Price: <span style={{ color: 'green' }}>${item.price}</span>
                                </p>
                                <button className={scrollProduct.btnDetails}>
                                    <Link to={`/product/${item.id}`} className={scrollProduct.details}>Details</Link>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className={scrollProduct.scrollControls}>
                        <button onClick={scrollLeft} className={scrollProduct.scrollBtn}>◀</button>
                        <button onClick={scrollRight} className={scrollProduct.scrollBtn}>▶</button>
                    </div>
                </div>

                <div className={styleHome.renting}>

                    <div className={styleHome.offer}>
                        <h1>20% off this <br />Laptop </h1>
                    </div>

                    <div className={styleHome.offer2}>
                        <h1>20% off this <br />Speakers </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
