import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from  "../assets/images3.jpeg";


function Blog () {
    return (
      <div>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={ AboutImg }   
        title="This is the Blog Page"
        buttonText="Explore More"
        
        btnClass="hide"
        />
      </div>
    )
  }
  
  export default Blog;