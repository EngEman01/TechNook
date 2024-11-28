import React from 'react'
import styleAbout from "./About.module.css"
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div className={styleAbout.aboutPage}>
                <div className={styleAbout.topAbout}>
                    <p>
                        Welcome to TechNook, the ultimate shopping destination for all your lifestyle needs. We are a dynamic online store dedicated to providing premium products across various categories, designed to meet the needs of every customer. From home comfort and entertainment to cutting-edge technology and specialized kitchen appliances, we’ve got it all.

                        At TechNook, we offer a curated selection of high-quality air conditioners to help you stay cool and comfortable year-round, along with an extensive range of audio & video equipment to bring your home entertainment system to life. Whether you’re looking to upgrade your living space or enhance your professional environment, our home appliances and kitchen appliances are crafted to add both functionality and style to your home.

                        Our collection also includes the latest PCs & laptops tailored to fit every lifestyle, from the everyday user to the power professional. If you’re a gaming enthusiast, our gaming products provide top-tier performance for an immersive experience, whether you're upgrading your setup or starting fresh.

                        One of our flagship offerings is the Kitchen Wars brand, which focuses on providing innovative kitchen gadgets and appliances that transform the way you cook. Designed for those who love cooking and those who are looking to make kitchen tasks quicker and more efficient, Kitchen Wars is your go-to brand for cutting-edge kitchen solutions.

                        We take pride in offering only the best and most reliable products. Our team carefully selects every item we sell, ensuring it meets the highest standards of quality, performance, and durability. We believe that shopping should be an experience, not a chore, which is why we aim to provide exceptional customer service and a hassle-free shopping experience.

                        Whether you're furnishing your home, upgrading your tech, or exploring the world of gaming, TechNook is here to make your shopping journey simple, enjoyable, and affordable. We are committed to providing the latest products at competitive prices and are constantly updating our inventory to meet the evolving needs of our customers.

                        Thank you for choosing TechNook. We’re here to help you find the perfect products for your lifestyle, and we look forward to serving you for all your future needs!


                    </p>

                    <div className={styleAbout.contact}>
                        <button><Link className={styleAbout.shop} to={'/'}>know more</Link></button>
                        <button><Link className={styleAbout.shop} to={'/contact'}>contact with us</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
