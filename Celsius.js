import React, { useState } from 'react';

function Converter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);

    // Convert Celsius to Fahrenheit
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setFahrenheit(fahrenheitValue);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input
          type="number"
          placeholder="Enter Celsius"
          value={celsius}
          onChange={handleCChange}
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
        />
      </label>
      <p>
         {celsius} °C<br />
        {fahrenheit} °F
      </p>
    </div>
  );
}

export default Converter;