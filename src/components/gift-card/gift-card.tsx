"use client";

import { useState } from "react";

export const GiftCard = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleRequest = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();

      setPhotos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div>
        <span>Loading....</span>
      </div>
    );
  }

  return (
    <div>
      <span>.gift-card</span>
      <button type="button" onClick={() => handleRequest()}>
        Fetch Photos
      </button>
      <div>
        <pre>{JSON.stringify(photos, null, 2)}</pre>
      </div>
    </div>
  );
};
