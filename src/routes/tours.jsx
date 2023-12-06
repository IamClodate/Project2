import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from  "../assets/images5.jpeg";


function Tours () {
    return (
      <div>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={ AboutImg }   
        title="This is the Tours Page"
        buttonText="Explore More"
        
        btnClass="hide"
        />
      </div>
    )
  }
  
  export default Tours;