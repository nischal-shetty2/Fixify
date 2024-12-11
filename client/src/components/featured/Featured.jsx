import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Featured.scss";

const Featured = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/gigs?search=${search}`);
    }
  };

  return (
    <div className="featured text-black">
      <div className="container ">
        <div className="left ">
          <h1>
            One-Stop <span className=" text-[#1dbf73]">Solution</span> for All
            Your Service Needs, Anytime, Anywhere!{" "}
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./media/search.png" alt="search" />
              <input
                type="search"
                placeholder='Try "building website"'
                onChange={({ target: { value } }) => setSearch(value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>

            <button>
              <Link to="/gigs?category=ac-technicians" className="link">
                AC Technicians
              </Link>
            </button>

            <button>
              <Link to="/gigs?category=electricians" className="link">
                Electricians
              </Link>
            </button>

            <button>
              <Link to="/gigs?category=plumbers" className="link">
                Plumbers
              </Link>
            </button>

            <button>
              <Link to="/gigs?category=mechanics" className="link">
                Mechanics
              </Link>
            </button>
          </div>
        </div>

        <div className="right">
          <img src="./media/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
