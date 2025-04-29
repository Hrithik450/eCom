import { useEffect, useState } from "react";
import { sampleResults } from "../../../../utils/constants";
import { Minimize2, Search } from "lucide-react";

const SearchButton = () => {
  return (
    <button className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
      <Search className="h-5 w-5" />
    </button>
  );
};

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 w-full z-50 flex items-start justify-center pt-10 sm:pt-16 md:pt-20 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full mx-4 sm:mx-6 md:w-[90%] lg:w-full max-w-2xl rounded-lg sm:rounded-xl shadow-lg border border-gray-400"
      >
        <div className="p-3 sm:p-4 flex items-center">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2" />

          <input
            autoFocus
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-sm sm:text-base text-gray-800"
          />

          <button
            onClick={onClose}
            className="cursor-pointer text-blue-500 hover:bg-blue-100 p-1 sm:p-1.5 rounded text-sm sm:text-base"
          >
            <Minimize2 className="h-5 w-5" />
          </button>
        </div>

        {/* We can adjust this after implementing backend */}
        <div className="sm:max-h-80 overflow-y-auto">
          {sampleResults
            .filter((item) =>
              item.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((item, index) => (
              <div
                key={index}
                className="px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-200 rounded-lg transition cursor-pointer overflow-hidden"
              >
                <div className="text-xs text-gray-500 font-medium uppercase">
                  {item.source}
                </div>
                <div className="font-semibold text-sm sm:text-base text-gray-800">
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                    “{item.description}”
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const SearchAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeydown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
      <div
        className="sm:hidden flex items-center"
        onClick={() => setIsModalOpen(true)}
      >
        <SearchButton />
      </div>

      <div
        className="hidden sm:flex items-center border border-gray-300 sm:border-gray-500 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 shadow-sm bg-white focus-within:ring-1 focus-within:ring-blue-500 hover:border-gray-400 transition-colors cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <SearchButton />
        <div className="flex items-center space-x-2 sm:space-x-4 ml-2">
          <span className="text-xs sm:text-sm text-gray-700 whitespace-nowrap">
            Search…
          </span>

          <div className="flex items-center space-x-0.5 px-1 py-0.5 border rounded bg-gray-100 text-xs text-gray-600">
            <kbd className="font-mono">Ctrl</kbd>
            <kbd className="font-mono">K</kbd>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SearchAction;
