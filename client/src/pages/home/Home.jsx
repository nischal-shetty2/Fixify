import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Featured, Slide, TrustedBy } from "../../components";
import { CategoryCard, ProjectCard } from "../../components";
import { cards, projects } from "../../data";

import "./Home.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} data={card} />
        ))}
      </Slide>
      <div className="features ">
        <div className="container">
          <div className="item">
            <h1>One-Stop Solution for All Your Service Needs</h1>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Verified Professionals</h6>
            </div>
            <p>
              Find high-quality service providers carefully vetted for your home
              and business maintenance needs.
            </p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Instant Booking</h6>
            </div>
            <p>
              Book reliable technicians, mechanics, and service providers
              instantly with just a few clicks.
            </p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Transparent Pricing</h6>
            </div>
            <p>
              Clear, upfront pricing for all services. No hidden charges, pay
              only for the service you receive.
            </p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>24/7 Support</h6>
            </div>
            <p>
              Our dedicated support team is available round-the-clock to assist
              you with any service-related queries.
            </p>
          </div>
        </div>
      </div>

      <div className="explore" id="explores">
        <div className="container">
          <h1>Explore Our Services</h1>
          <div className="items">
            {cards.map((card) => (
              <Link to={"/gigs?category=" + card.slug}>
                <div className="item" key={card.id}>
                  <img
                    className=" object-contain"
                    src={card.img || "https://via.placeholder.com/150"}
                    alt={card.title}
                  />
                  <div className="line"></div>
                  <span>
                    <Link to={`/gigs?category=${card.slug}`} className="link">
                      {card.title}
                    </Link>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="features dark" id="workhiveCommunity">
        <div className="container">
          <div className="item">
            <h2>Service Community</h2>
            <h1>
              Connect, Collaborate & Solve <span>Problems</span>
            </h1>
            <p>
              Join our platform and experience a seamless home service ecosystem
            </p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Connect with trusted service professionals near you</h6>
            </div>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Get personalized service recommendations</h6>
            </div>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Build long-term service relationships</h6>
            </div>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
