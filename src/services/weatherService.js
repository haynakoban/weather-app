import moment from 'moment/moment';

export const fetchWeatherData = async (infoType, searchParams) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
};

export const formatToLocalTime = (secs, zone, format = 'dddd, D MMMM YYYY') => {
  const date = moment.unix(secs).utcOffset(zone / 60);
  const formattedDate = date.format(format);
  return formattedDate;
};

export const formatHumidityText = (humidity) => {
  let status;

  if (humidity < 30) {
    status = 'Dry';
  } else if (humidity >= 30 && humidity <= 60) {
    status = 'Normal';
  } else if (humidity > 60 && humidity <= 80) {
    status = 'Elevated';
  } else {
    status = 'Oppressive';
  }

  return status;
};

export const formatSunriseSunsetStatus = (currentTime, eventTime) => {
  const difference = moment.duration(moment.unix(eventTime).diff(currentTime));
  const absDifference = Math.abs(difference.asSeconds());

  if (absDifference >= 3600) {
    return `${Math.floor(absDifference / 3600)}h ${
      absDifference % 3600 >= 60
        ? Math.floor((absDifference % 3600) / 60) + 'm'
        : ''
    } ${difference.asSeconds() < 0 ? 'ago' : 'from now'}`;
  } else if (absDifference >= 60) {
    return `${Math.floor(absDifference / 60)}m ${
      difference.asSeconds() < 0 ? 'ago' : 'from now'
    }`;
  } else {
    return `Few seconds ${difference.asSeconds() < 0 ? 'ago' : 'from now'}`;
  }
};

export const getWindDirection = (degrees) => {
  const directions = [
    'North',
    'North-Northeast',
    'Northeast',
    'East-Northeast',
    'East',
    'East-Southeast',
    'Southeast',
    'South-Southeast',
    'South',
    'South-Southwest',
    'Southwest',
    'West-Southwest',
    'West',
    'West-Northwest',
    'Northwest',
    'North-Northwest',
  ];

  const index = Math.round((degrees % 360) / 22.5);
  return directions[index % 16];
};

export const getVisibilityDescription = (visibility) => {
  if (visibility < 50) {
    return 'Dense fog';
  } else if (visibility <= 200) {
    return 'Thick fog';
  } else if (visibility <= 500) {
    return 'Moderate fog';
  } else if (visibility <= 1000) {
    return 'Light fog';
  } else if (visibility <= 2000) {
    return 'Thin fog';
  } else if (visibility <= 4000) {
    return 'Haze';
  } else if (visibility <= 10000) {
    return 'Light haze';
  } else if (visibility <= 20000) {
    return 'Clear';
  } else if (visibility <= 50000) {
    return 'Very clear';
  } else {
    return 'Exceptionally clear';
  }
};

export const analyzePressure = (pressure) => {
  if (pressure < 980) {
    return `Very Low`;
  } else if (pressure < 1000) {
    return `Low`;
  } else if (pressure < 1010) {
    return `Moderate Low`;
  } else if (pressure < 1020) {
    return `Moderate High`;
  } else if (pressure < 1040) {
    return `High`;
  } else {
    return `Very High`;
  }
};

export const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;
