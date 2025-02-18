import { useState } from "react";
import { useAppDispatch } from "../../../../app/providers/store/store";
import { fetchweather } from "../../../../entities/Weather/model/slices/WeatherSlices";
import search_icon from "../../../../assets/search.png";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const search = () => {
    if (searchQuery.trim()) {
      dispatch(fetchweather(searchQuery));
      setSearchQuery("");
    }
  };

  return (
    <div className="search-bar">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar-input"
        type="text"
        placeholder="Введите город"
      />
      <img className="search-icon" src={search_icon} alt="" onClick={search} />
    </div>
  );
};
