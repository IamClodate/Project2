// import Hero from "../components/Hero";
// import Navbar from "../components/Navbar";
// import AboutImg from  "../assets/sea.jpeg";
import Desitination from "../components/Desitination";

function About() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <Hero 
          cName="hero-mid"
          heroImg={ AboutImg }   
          title="This is the About Page"
          buttonText="Explore More"
          
          btnClass="hide"
        /> */}

<div className="form-container">
            {/* <h1>Contact Us</h1> */}

            <Desitination />
                <form>
                    <textarea placeholder="Thank you for visiting us"></textarea>
                    <textarea placeholder="This is the about us page"></textarea>
                    <textarea placeholder="About"></textarea>
                    
                    <button>Explore More</button>

                </form>
        </div>
      </div>
    );
  }
  
  export default About;