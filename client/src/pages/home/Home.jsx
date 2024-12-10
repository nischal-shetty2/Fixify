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
      <div className="features">
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
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=AC Technician" className="link">
                  AC Technician
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Electrician" className="link">
                  Electrician
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Plumber" className="link">
                  Plumber
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Mechanic" className="link">
                  Mechanic
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Carpenter" className="link">
                  Carpenter
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Cleaning Services" className="link">
                  Cleaning Services
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Pest Control" className="link">
                  Pest Control
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link
                  to="/gigs?category=Home Appliance Repair"
                  className="link">
                  Home Appliance Repair
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Painting Services" className="link">
                  Painting Services
                </Link>
              </span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>
                <Link to="/gigs?category=Other Home Services" className="link">
                  Other Home Services
                </Link>
              </span>
            </div>
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
            <button>Join Our Service Community</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} data={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
