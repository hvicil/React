import React from "react";

const Jsx5 = () => {
  const names = ["Ali", "Veli", "Ayse"];
  const cities = ["Istanbul", "Ankara", "Izmir", "Yozgat"];
  return (
    <>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </>
  );
};

export default Jsx5;
