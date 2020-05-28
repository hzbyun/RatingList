import React from "react";
import PublishedItems from "./PublishedItems";
import DraftsItems from "./DraftsItems";

const ListingScreen = () => {
  // Add state
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // only runs when state changes
    fetch("http://localhost:5000/reviews")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <main className="listing-screen">
      <PublishedItems items={items.filter(i => i.published)} />
      <DraftsItems items={items.filter(i => !i.published)} />
    </main>
  );
};

export default ListingScreen;
