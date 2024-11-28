import React from 'react'
import styleContact from './Contact.module.css'

export default function Contact() {
    return (
        <>
            <div className={styleContact.allPage}>

                <div className={styleContact.intro}>
                    <h1 className={styleContact.title}>Contact Us</h1>
                    <p>Facing any issues?</p>
                    <p>We'd love to hear from you! Feel free to reach out through any of the following methods:</p>
                </div>

                <div className={styleContact.inputText}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    
                    <input type="email" name="email" placeholder="Your Email (e.g., example@mail.com)" required />
                  
                    <input type="tel" name="phone" placeholder="Your Phone Number (e.g., 01123456789)" required />
                    
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit" className={styleContact.submitButton}>Send Message</button>
                </div>

            </div>
        </>
    )
}
