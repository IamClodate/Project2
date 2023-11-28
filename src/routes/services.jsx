import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from  "../assets/sea.jpeg"; 

function Services () {
    return (
      <div>
      <Hero 
      cName="hero-mid"
      heroImg={ AboutImg }   
      title="This is the Service Page"
      buttonText="Explore More"
      
      btnClass="hide"
      />
      
      </div>
    )
  }
  
  export default Services;