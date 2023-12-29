import { create } from 'zustand';
import { fetchWeatherData } from '../services/weatherService';

const useWeatherStore = create((set) => ({
  units: 'metric', // ['imperial', 'metric']
  query: { q: 'QueensLand' },
  myLocation: false,
  w: {},
  f: {},

  getWeatherForecast: async () => {
    const { query, units } = useWeatherStore.getState();
    const currentWeather = await fetchWeatherData('weather', {
      ...query,
      units,
    });
    const weatherForecast = await fetchWeatherData('forecast', {
      lat: currentWeather?.coord?.lat,
      lon: currentWeather?.coord?.lon,
      cnt: 5,
      units,
    });

    set({ w: currentWeather, f: weatherForecast });
  },

  getCoordinates: async (lat, lon) => {
    const { getWeatherForecast } = useWeatherStore.getState();
    const weatherForecast = await fetchWeatherData('forecast', {
      lat: lat,
      lon: lon,
    });

    set({ myLocation: true, query: { q: weatherForecast?.city?.name } });
    getWeatherForecast();
  },

  updateUnits: (units) => {
    set({ units });
  },

  updateMyLocation: (status) => {
    set({ myLocation: status });
  },

  searchWeather: (searchKey) => {
    set({ query: { q: searchKey } });
  },
}));

export default useWeatherStore;
