import "./Hero.css";
// import herpImg from '../assets/image2.jpeg'; 

function Hero(props) {
    return (
        
      // <div className={props.cName}>
      //    <img alt="HerpImg" src= {props.herpImg}/>
  
      //     <div className="hero-text">
      //     <h1>props.title</h1>
      //     <p>props.text</p>
      //     <a href={props.url} className={props.btnClass}>
      //       {props.buttonText}
      //     </a>
      //     </div>
      // </div>
      <>
      <div className={props.CName}>
        <h1>Welcome</h1>
        <img alt="HerpImg" src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D"/>
         <div className="hero-text" >
          <h1>Welcome to Tranquil Tours</h1>
          <h2>Explore your heart desires</h2>
          <p>Thank you for visiting us</p>
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

  