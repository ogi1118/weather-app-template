import { useState, useEffect } from "react";
import "./App.css";


// 天気情報を取得する関数
async function fetchWeatherData() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const location = import.meta.env.VITE_WEATHER_LOCATION;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no&lang=ja`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("APIキーが無効です");
    }
    return await response.json();
  } catch (error) {
    if (error.message === "APIキーが無効です") {
      throw error;
    }
    throw new Error("ネットワークエラーです");
  }
}

// メインのアプリケーション部分
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&q=Tokyo&days=7&aqi=no&lang=ja`
        );
        if (!response.ok) {
          throw new Error("天気データの取得に失敗しました");
        }
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="loading">読み込み中...</div>;
  if (error) return <div className="error">エラー: {error}</div>;
  if (!weather) return null;

  const { current, forecast } = weather;

  return (
    <div className="app">
      <h1>東京の天気予報</h1>

      {/* 今日の天気 */}
      <div className="today-weather">
        <h2>今日の天気</h2>
        <div className="weather-info">
          <img
            src={current.condition.icon}
            alt={current.condition.text}
            className="weather-icon"
          />
          <div>
            <p className="temperature">{current.temp_c}°C</p>
            <p className="condition">{current.condition.text}</p>
            <p className="humidity">湿度: {current.humidity}%</p>
            <p className="wind">風速: {current.wind_kph} km/h</p>
          </div>
        </div>
      </div>

      {/* 週間天気予報 */}
      <div className="weekly-forecast">
        <h2>週間天気予報</h2>
        <div className="forecast-container">
          {forecast.forecastday.map((day, index) => (
            <div key={index} className="forecast-card">
              <p className="date">
                {new Date(day.date).toLocaleDateString("ja-JP", {
                  weekday: "short",
                })}
              </p>
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className="weather-icon"
              />
              <p className="temperature">{day.day.maxtemp_c}°C</p>
              <p className="condition">{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
