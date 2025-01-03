import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>
              <Link to="/gigs?category=ac-tech" className="link">
                AC technicians
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=ele" className="link">
                Electricians
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=plum" className="link">
                Plumbers
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=mech" className="link">
                mechanics
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=carp" className="link">
                carpenters
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=tech" className="link">
                technicians
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=pes" className="link">
                cleaning and Pest control
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=ho" className="link">
                home appliances repair
              </Link>
            </span>
            <span>
              <Link to="/gigs?category=bu" className="link">
                building paintings
              </Link>
            </span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>Categories</span>
            <span>Service Providers</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            {/* <span>Intellectual Property Claims</span>
            <span>Investor Relations</span> */}
          </div>
          <div className="item">
            <h1>Support</h1>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
          </div>
          {/* <div className="item">
            <h1>Community</h1>
            <span>Events</span>
            <span>Blog</span>
            <span>Forum</span>
            <span>Community Standards</span>
            <span>Podcast</span>
            <span>Affiliats</span>
            <span>Invite a Friend</span>
          </div> */}
          <div className="item">
            <h1>More From Fixify</h1>
            <span>Fixify Community</span>
            <span>Fixify Pro</span>
            <span>Fixify Studios</span>
            <span>Get Inspired</span>

            {/* <span>Fixify Guild</span>
            <span>Fixify Logo Maker</span>
            <span>Fixify Select</span>
            <span>Clear Voice</span>
            <span>Fixify Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span> */}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Fixify</h2>
            <span>© Fixify. {new Date().getFullYear()}</span>
          </div>
          <div className="right">
            <div className="social">
              <a href="/">
                <img src="./media/twitter.png" alt="" />
              </a>
              <a href="/">
                <img src="./media/facebook.png" alt="" />
              </a>
              <a href="/">
                <img src="./media/linkedin.png" alt="" />
              </a>
              <a href="/">
                <img src="./media/pinterest.png" alt="" />
              </a>
              <a href="/">
                <img src="./media/instagram.png" alt="" />
              </a>
            </div>
            <div className="link">
              <img src="./media/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="./media/coin.png" alt="" />
              <span>INR</span>
            </div>
            <div className="link">
              <img src="./media/accessibility.png" alt="" />
              {/* <span>USD</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
