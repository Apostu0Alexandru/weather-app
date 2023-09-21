const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export const fetchWeather = async (city: string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return {
        city: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp,
        iconUrl: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    };
};
