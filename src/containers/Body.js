import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { CountryTable } from "../components/CountryTable";
import { LanguageTable } from "../components/LanguageTable";

const APIS = {
  CountryAPI: "https://restcountries.eu/rest/v2/all",
};

const Body = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(
      async (response) => {
        if (response.ok) setTodos(await response.json());
        console.log("REEEEEEEEEEEEEE", todos);
      }
    );
  }, []);

  return (
    <>
      <section id="container" className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Available Beds</h2>

            <select className="sort-select">
              <option>Sort By</option>
              <option>Number of beds</option>
              <option>Availability</option>
            </select>

            <div>
              {todos.slice(0, 20).map((item) => (
                <CountryTable id={item.id} title={item.title} url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
