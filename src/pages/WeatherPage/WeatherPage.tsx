import { useEffect } from "react";
import { useAppDispatch } from "../../app/providers/store/store";
import { fetchweather } from "../../entities/Weather/model/slices/WeatherSlices";



import { Weather } from "../../widgets/Weather";

export const WeatherPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchweather("moscow"));
  }, [dispatch]);

  return (
    <div className="wether-block">
     
      <Weather/>
    </div>
  );
};
