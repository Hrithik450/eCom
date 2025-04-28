import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="text-xl font-bold text-gray-900">
        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1745775369/Screenshot_2025-04-27_231947_m5sjlm.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
