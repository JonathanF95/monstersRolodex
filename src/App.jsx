import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';


function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error Fetching data:', error);
      }
    };
    fetchData(); // Call fetchData() within useEffect

    // No need to return anything since fetchData() is called synchronously
  }, []); // Empty dependency array to mimic componentDidMount

  return (
    <>
      {/* Render fetched data */}
      {data && (
        <div>
          {data.map((user, index) => (
            <h1 key={index}>{user.name}</h1>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
