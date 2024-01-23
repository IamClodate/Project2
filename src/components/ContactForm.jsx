// import React from 'react';
import "./ContactForm.css";

function ContactForm() {
  return (
     <div className="form-container">
            <h1>Contact Us</h1>
            <p>Please fill in the form below and our dedicated team will get in touch with you</p>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button>Enter</button>

                </form>
        </div>
    
  )
}

export default ContactForm

