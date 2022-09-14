import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const loadData = async () => {
    try {
      const resp = await axios("https://restcountries.com/v3.1/all");
      setCountries(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="mt-5">
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Flag</th>
            <th>Name</th>
            <th>Population</th>
            <th>Capital City</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={country.flags.png} width="100" />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country.capital && country.capital.join("-")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;
