import React from "react";

interface WeatherData {
    city: string;
    description: string;
    temperature: number;
    iconUrl?: string;
}

interface WeatherDisplayProps {
    data: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
    if (!data) return <p>No data to display.</p>


    return (
        <div>
            <h2>Weather in {data.city}</h2>
            {data.iconUrl && <img src={data.iconUrl} alt="Weather icon" />}
            <p>{data.description}</p>
            <p>{data.temperature}°C</p>
        </div>
    )
}

export default WeatherDisplay