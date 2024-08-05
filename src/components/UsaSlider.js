import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa'; // Import icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../App.css'; // Ensure your custom CSS is imported

const UsaSlider = () => {
  const navigate = useNavigate();
  
const handleContactClick = () => {
  navigate('/contact');
};



  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?t=st=1722788637~exp=1722792237~hmac=c7489e56cabb0d867fe8304bf3cc7988adbaf17197576ec9ae07b365722f500a&w=1380"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-overlay">
            <h3>Where it all began....</h3>
            <p>Our wonderful company started when three minds came together in New York with the one purpose... to create a one stop shop webpage which is perfect for tourists or citizens to know exactly what's going on across the US at any particular time!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://img.freepik.com/free-photo/beautiful-shot-golden-gate-bridge_181624-3381.jpg?t=st=1722788908~exp=1722792508~hmac=4ed40f92cc1b69b86ad6cc0d66faf1dfa50d305ecdf0b443f8da8d7f8e76ee00&w=1380"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-overlay">
            <h3>The family continues to grow...</h3>
            <p>After our company found great success following COVID 19, we were able to expand and open our second location in San Francisco, allowing us to grow our team and support our customers even more!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://img.freepik.com/free-photo/vertical-shot-buildings-downtown-austin-tall-glass-building-texas-usa_181624-2961.jpg?t=st=1722789172~exp=1722792772~hmac=385050c3d5e45d00812ece5e78565ae734c11d78d21a6745742db3da68c849fa&w=740"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-overlay">
            <h3>Our biggest move yet!</h3>
            <p>
              Which brings us to the present day, where our headquarters has moved to Austin Texas, where we have hired a team of over 100 people and are coming off our greatest fiscal year to date!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Our Company Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">
              <h2 className="company-heading">Our Company</h2>
              <div className="underline mx-auto"></div>
              <p className="company-text">
                Founded in 2020, USA Explorer is the nation's leading digital travel companion. We began with a simple idea: to make exploring the United States easier, more accessible, and more enjoyable for everyone. Our innovative platform combines cutting-edge technology with local expertise to offer a one-stop solution for all your travel needs across the USA.
              </p>
              <p className="company-text">
                From the bustling streets of New York to the serene landscapes of national parks, from hidden local gems to world-famous landmarks, we curate and connect you with the best experiences America has to offer. Our team of passionate travelers and tech enthusiasts work tirelessly to ensure that whether you're planning a weekend getaway or a cross-country adventure, you have all the tools and information at your fingertips.
              </p>
              <p className="company-text">
                As we've grown from our humble beginnings in New York to our current headquarters in Austin, our commitment remains unchanged: to inspire and empower people to explore the diverse beauty, culture, and experiences of the United States. Join us on this exciting journey of discovery!
              </p>
              <button className="btn btn-primary read-more-btn"
              onClick={handleContactClick}>Want to know more - Contact us!</button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission and Values of Company */}
      <section className="section bg-c-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Vision, Mission & Values</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 text-center vmv-section">
              <FaEye className="vmv-icon" />
              <h6>Our Vision</h6>
              <p>To revolutionize the way people explore and experience the United States, making travel planning seamless, exciting, and accessible to all.</p>
            </div>
            <div className="col-md-4 text-center vmv-section">
              <FaBullseye className="vmv-icon" />
              <h6>Our Mission</h6>
              <p>Our mission is to provide a comprehensive, user-friendly platform that simplifies travel planning across the USA. We aim to connect travelers with diverse experiences, comfortable accommodations, and unforgettable events, all in one place. By doing so, we strive to inspire more people to discover the rich tapestry of cultures, landscapes, and experiences that the United States has to offer.</p>
            </div>
            <div className="col-md-4 text-center vmv-section">
              <FaStar className="vmv-icon" />
              <h6>Our Values</h6>
              <ul>
                <li><strong>Innovation:</strong> We constantly seek new ways to improve our platform and stay ahead of travel trends, ensuring our users always have access to cutting-edge travel planning tools.</li>
                <li><strong>Inclusivity:</strong> We believe travel should be for everyone. Our platform caters to all types of travelers, regardless of budget, interests, or background.</li>
                <li><strong>Reliability:</strong> We are committed to providing accurate, up-to-date information on events, accommodations, and attractions, earning our users' trust with every trip they plan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsaSlider;
