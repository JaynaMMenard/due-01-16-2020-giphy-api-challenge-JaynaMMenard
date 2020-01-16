import React, { useState, useEffect } from "react";
import axios from "axios";
import {Input} from "reactstrap";
import ZipCode from "./ZipCode";


const Home = () => {
  const [results, setResults] = useState([]);
  const [zipCode, setZipCode] = useState();

  useEffect(() => {
    let zipRegex = /\d{5}/g;
    const fetchData = async () => {
      if (zipCode && zipRegex.test(zipCode)) {
        try {
          const result = await axios(
            `https://ctp-zip-api.herokuapp.com/zip/${zipCode}`
          );
          setResults(result.data);
        } catch (error) {
          
        }
      }
    };
    fetchData();
  }, [zipCode]);

  return (
    <div>
                <Input 
                  id="Zip"
                  placeholder="Enter Zip Code"
                  onChange={() => {
                    setZipCode(document.getElementById("Zip").value);
                  }}
                />
      {results.map(result => (
        <ZipCode key={result.RecordNumber} result={result} />
      ))}
    </div>
  );
};


export default Home;
