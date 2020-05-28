import React from "react";
import Ratings from "./Ratings";

const ItemDetail = ({ itemId }) => {
  const [item, setItem] = React.useState();

  React.useEffect(() => {
    // only runs when state changes
    fetch(`http://localhost:5000/reviews/${itemId}`)
      .then(response => response.json())
      .then(data => setItem(data));
  }, [itemId]);

  if (!item) {
    return <div>loading...</div>;
  }

  return (
    <div className="listing-screen">
      <div className="item">
        <div>{item.title}</div>
        <Ratings rating={item.rating} />
      </div>
      <p>{item.body}</p>
    </div>
  );
};

export default ItemDetail;
