import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import styleNavbar from "./Navbar.module.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isCategoryDownVisible, setIsCategoryDownVisible] = useState(false);
    const [isNavbarDownVisible, setIsNavbarDownVisible] = useState(false);

    const toggleCategoryDown = () => {
        setIsCategoryDownVisible(prevState => !prevState);
    }
    const toggleNavbarDown = () => {
        setIsNavbarDownVisible(prevState => !prevState);
    }
    return (
        <>
            <div className={styleNavbar.tokkoNavbar}>
                <div className={styleNavbar.topNavbar}>
                    <div className={styleNavbar.logo}>
                        <i className="fa fa-shopping-bag" style={{ fontSize: '32px' }} aria-hidden="true"></i>
                        <div className={styleNavbar.logoText}>
                            <h1>TechNook</h1>
                        </div>
                    </div>
                    <div className={styleNavbar.links}>

                        <Link to={'/'} className={styleNavbar.elementLink}>home</Link>
                        <Link to={'/product'} className={styleNavbar.elementLink}>product</Link>
                        <Link to={'/about'} className={styleNavbar.elementLink}>about</Link>
                        <Link to={'/contact'} className={styleNavbar.elementLink}>contact us</Link>

                    </div>
                    <div className={styleNavbar.cart}>
                        <button
                            className={styleNavbar.navToggle}
                            aria-label="Toggle Menu"
                            onClick={toggleNavbarDown}
                        >
                            ☰
                        </button>
                        {isNavbarDownVisible && (
                            <div className={styleNavbar.navbarDown}>
                                <Link to={'/'} className={styleNavbar.elementLink}>home</Link>
                                <Link to={'/product'} className={styleNavbar.elementLink}>product</Link>
                                <Link to={'/about'} className={styleNavbar.elementLink}>about</Link>
                                <Link to={'/contact'} className={styleNavbar.elementLink}>contact us</Link>
                            </div>
                        )}
                        <i class="fa fa-heart" style={{ fontSize: '35px' }} aria-hidden="true"></i>
                        <i class="fa fa-shopping-cart" style={{ fontSize: '30px' }} aria-hidden="true"></i>
                    </div>
                </div>
                <div className={styleNavbar.downNavbar}>
                    <div className={styleNavbar.category}>
                        <div className={styleNavbar.categoryTop}>
                            <button
                                className={styleNavbar.menuToggle}
                                aria-label="Toggle Menu"
                                onClick={toggleCategoryDown}
                            >
                                ☰
                            </button>
                            <h2 className="cate">all Categories</h2>
                        </div>


                        {isCategoryDownVisible && (
                            <div className={styleNavbar.categoryDown}>

                                <Link className={styleNavbar.cateLinks} to={'/Conditioner'}>air conditioner</Link>
                                <Link className={styleNavbar.cateLinks} to={'/videos'}>audio & video</Link>
                                <Link className={styleNavbar.cateLinks} to={'/gadgets'}>Gadgets</Link>
                                <Link className={styleNavbar.cateLinks} to={'/home-appliances'}>home appliances</Link>
                                <Link className={styleNavbar.cateLinks} to={'/kitchen-appliances'}>kitchen appliances</Link>
                                <Link className={styleNavbar.cateLinks} to={'/pc&laptops'}>pc & laptop</Link>
                                <Link className={styleNavbar.cateLinks} to={'/gaming'}>gaming</Link>
                                <Link className={styleNavbar.cateLinks} to={'/kitchen-wars'}>kitchen wars</Link>


                            </div>
                        )}
                    </div>

                    <div className={styleNavbar.searching}>
                        <input className={styleNavbar.cateSearch} type="text" />
                        <button className={styleNavbar.btnSearch1}>search</button>
                        <button className={styleNavbar.btnSearch2}>
                            <i className="fa fa-search" aria-hidden="true" style={{ color: '#fff' , fontSize: '20px'}}></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
