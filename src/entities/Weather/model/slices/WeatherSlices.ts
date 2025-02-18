import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IWeatherData, IWeather } from "../../types/types";

const initialState: IWeatherData = {
  data: null,
  savedHistory: JSON.parse(localStorage.getItem("savedHistory") || "[]"),
  loading: false,
  error: undefined,
};

export const fetchweather = createAsyncThunk<IWeather, string>(
  "fetch/weather",
  async (city, { rejectWithValue }) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }&units=metric&lang=ru`;

      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();

      return {
        temperature: Math.round(data.main.temp),
        location: data.name,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Неизвестная ошибка загрузки");
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearHistory: (state) => {
      state.savedHistory = [];
      localStorage.setItem("savedHistory", JSON.stringify([]));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchweather.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchweather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          humidity: action.payload.humidity,
          temperature: action.payload.temperature,
          windSpeed: action.payload.windSpeed,
          location: action.payload.location,
          icon: action.payload.icon,
        };

        if (!state.savedHistory.includes(action.payload.location)) {
          state.savedHistory = [
            action.payload.location,
            ...state.savedHistory,
          ].slice(0, 4);
          localStorage.setItem(
            "savedHistory",
            JSON.stringify(state.savedHistory)
          );
        }
      })
      .addCase(fetchweather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearHistory } = weatherSlice.actions;

export default weatherSlice.reducer;
