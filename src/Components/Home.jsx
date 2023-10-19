import {Link} from "react-router-dom";
import image  from "src/bg";

const Home = () => {
  return (
    <>
    <div className="bg" style={{backgroundImage: `url(${image})`}}>
    <div className="root-container" >
    <div className="welcome-message">
    <p>Welcome to</p> <h1>Adekunle Olutuyo's</h1> <p>website</p>
    </div>
       <p className="link-to-counter">
      Please check our <Link to="/counter">counter app</Link>
      </p>
      </div>
      </div>
    </>
    
  );
};

export default Home;