import { Search } from "lucide-react";
import React from "react";

const SearchAction = () => {
  return (
    <button className="text-gray-700 hover:text-gray-900 transition-colors">
      <Search className="h-5 w-5" />
    </button>
  );
};

export default SearchAction;
