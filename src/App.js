import React, { useState } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'France']);

  return (
    <div className='app'>
      <div className='app__header'>
        <h1>Covid 19 Tracker</h1>
        <FormControl className='app__dropdown'>
          <Select variant='outlined' value='abc'>
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Title + Select input */}
      {/* Infoboxs */}
      {/* Infoboxs */}
      {/* Infoboxs */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
