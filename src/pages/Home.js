import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card, Space } from 'antd';
import Carousel1 from "../images/Carousel1.webp";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";
import Comics from "../images/comics.png";
import CWO from "../images/cwo.jpg";
import Fantasy from "../images/harry1.jpg";
import Horror from "../images/horror.webp";
import LightYear from "../images/lightyear.jpg";
import BatMan from "../images/batman.jpg";

const carousel = [Carousel1,Carousel2,Carousel3];
const catCard = [Fantasy,Horror,LightYear,CWO];
const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel" ></img>;
    })}
    </Carousel>
    <Space/>
    <Space/>
    <Space/>
    <Space/>
    <Space/>
    <Space/>
    <div className="cards">  
      <Card className="card">
        <h1>Browse Comics</h1>
        <img src={Comics} alt="Comics Category" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Comics"} className="link">
          Shop Now
        </Link>
      </Card>
      <Card className="card">
        <h1>Lightyear</h1>
        <img src={LightYear} alt="Lightyear" className="card-content"></img>
        <br />
        <Link to="/categories" className="link"  state={"Comics"}>
          View Product
        </Link>
      </Card>
      <Card className="card">
        <h1>The Art of the Batman</h1>
        <img src={BatMan} alt="Batman" className="card-content"></img>
        <br />
        <Link to="/categories" className="link"  state={"Comics"} >
          View Product
        </Link>
      </Card>
      <Card className="card">
        <h1>Shop By Category</h1>
        <div className="card-content">
          {catCard.map((e) => {
            return (
              <img
                src={e}
                alt="category"
                className="card-category"
                onClick={() => console.log("beauty")}
              ></img>
            );
          })}
          <br />
          <Link to="/" className="link">
            Shop All
          </Link>
        </div>
      </Card>
    </div>
  </div>
  </>
)
}

export default Home;
