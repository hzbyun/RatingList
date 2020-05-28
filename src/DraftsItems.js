import React from "react";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

const DraftsItems = ({ items }) => {
  return (
    <section>
      <h3 className="items-title">Drafts</h3>
      <ul className="items">
        {items.map(item => (
          <li className="item" key={item.id}>
            <Link className="link" to={`/detail/${item.id}`}>
              {item.title}
            </Link>
            <Ratings rating={item.rating} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DraftsItems;
