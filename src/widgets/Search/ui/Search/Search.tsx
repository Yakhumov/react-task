import { useState } from "react";
import { useAppDispatch } from "../../../../app/providers/store/store";
import { fetchweather } from "../../../../entities/Weather/model/slices/WeatherSlices";
const search_icon = new URL("../assets/search.png", import.meta.url).href;

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
