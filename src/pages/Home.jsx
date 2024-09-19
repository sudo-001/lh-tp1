import React from "react";
import LiveText from "../components/LiveText";
import axios from "axios";
import CountryCard from "../components/pages/home/CountryCard";

function Home() {
  const [countries, setCountries] = React.useState([]);
  let varMe;

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      // Mise a jour de mes pays recuperes
      await setCountries(response.data);

      // Affichage des pays recuperes

      // console.log(response);

      // let countries = response.data;

      // for (let i = 0; i < countries.length; i++) {
      //   let country = countries[i];
      //   console.log(country);
      // }

      // countries.map((country) => console.log(country));
    } catch (error) {
      console.error(error);
    }
    console.log(countries);
  };

  React.useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="h-screen py-4 ">
      <h1 className="border-2 py-4 text-lg font-bold px-2">
        COUNTRIES API INTEGRATION{" "}
      </h1>

      <div className="border-2 px-2 py-4 my-2 flex flex-wrap gap-x-8 gap-y-4 justify-evenly">
        {countries &&
          countries.map((country) => (
            <CountryCard
              name={country.name.official}
              capital={country.capital}
              // language={country.languages}
              flag={country.flag}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
