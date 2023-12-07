import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from  "../assets/images4.jpeg";


function Contact () {
    return (
      <div>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={ AboutImg }   
        title="Contact "
        buttonText="Explore More"
        
        btnClass="hide"
        />
        {/* <ContactForm/> */}
      </div>
    )
  }
  
  export default Contact;