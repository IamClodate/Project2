import "./Hero.css";
// import herpImg from '../assets/image2.jpeg'; 

function Hero(props) {
    return (
        
    
      
      <>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg}/>

        
        <img alt="HerpImg" src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D"/>
         <div className="hero-text" >
         <h1>{props.title}</h1>
        <p>{props.text}</p>
          <a href="/">
            My Travel Tours
          </a>
         </div>
        <h1>Test</h1>
      </div>
      </>
    );
  }
  
  export default Hero;

  