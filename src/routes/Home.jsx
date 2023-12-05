import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home () {
  return (
    <div>
        <Navbar />
        <Hero 
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          title="Explore your heart desires Clody"
          text="Travel The world"
          buttonText="Explore More"
          url="/"
          btnClass="show"
        />
    </div>
  );
}

export default Home;