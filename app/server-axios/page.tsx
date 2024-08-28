"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function getData() {
  const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: 21.0285, 
      longitude: 105.8542, 
      hourly: 'temperature_2m,weathercode',
      start: new Date().toISOString().split('T')[0],
      timezone: 'Asia/Ho_Chi_Minh',
    },
  });
  const { temperature_2m, weathercode } = response.data.hourly;
  return {
    temperature: temperature_2m[0],
    condition: weathercode[0], 
  };
}

export default async function ServerAxios() {
  const data = await getData();

  if (!data) {
    return <div>Failed to load weather data</div>;
  }

  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {data.temperature}°C</p>
      <p>Condition Code: {data.condition}</p>
    </div>
  );
}
