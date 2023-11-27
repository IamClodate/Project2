import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from  "../assets/sea.jpeg";


function About () {
    return (
      <div>
        <Hero 
          cName="hero"
          heroImg={ AboutImg}   
          title="Explore your heart desires"
          text="Travel The world"
          buttonText="Explore More"
          url="/"
          btnClass="show"
        />
      </div>
    );
  }
  
  export default About;