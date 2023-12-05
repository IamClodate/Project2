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
        title="This is the About Page"
        buttonText="Explore More"
        
        btnClass="hide"
        />
      </div>
    )
  }
  
  export default Contact;