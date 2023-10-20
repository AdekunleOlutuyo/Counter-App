import { Link } from "react-router-dom";
import image from "./bg.jpg";

const Home = () => {
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${image})` }}>
        <div className="root-container">
          <div className="welcome-message">
            <p>Welcome to</p> <h1>Adekunle Olutuyo's</h1> <p>website</p>
          </div>
          <p className="link-to-counter">
            Please check out my <Link to="/counter">counter app</Link>
          </p>
        </div>
        <p className="about-app">
          Welcome, this is a basic counter app that lets you take counts or
          tally for whatever purpose you may choose, be it keeping tabs on
          inventory or stock or keeping game scores, anything, you name it. It
          also lets you set your own value, in case you already have a number
          you'd like to start from.
        </p>
      </div>
    </>
  );
};

export default Home;
