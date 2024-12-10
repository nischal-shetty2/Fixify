import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const Card = (props) => {
  const { data } = props;

  return (
    <Link to={`/gigs?category=${data.slug}`}>
      <div className="cardContainer  ">
        <img className="filter brightness-50" src={data.img} alt={data.title} />
        <span className="desc ">{data.desc}</span>
        <span className="title mt-10">{data.title}</span>
      </div>
    </Link>
  );
};

export default Card;
