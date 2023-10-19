import {Link} from "react-router-dom";


const Home = () => {
  return (
    <>
    <img className="bg" src="src/images/bg.jpg" alt="logo"/>
    <div className="root-container" >
    <div className="welcome-message">
    <p>Welcome to</p> <h1>Adekunle Olutuyo's</h1> <p>website</p>
    </div>
       <p className="link-to-counter">
      Please check our <Link to="/counter">counter app</Link>
      </p>
      </div>
      
    </>
    
  );
};

export default Home;