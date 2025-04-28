import React from "react";

const ImageSection = ({ imageUrl }) => {
  return (
    <section className="max-w-[120rem] mx-auto my-4">
      <img src={imageUrl} alt="headphone" className="mx-auto" />
    </section>
  );
};

export default ImageSection;
