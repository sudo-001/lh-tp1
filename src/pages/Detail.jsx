import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [country, setCountry] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  //   On recupere le nom du pays passe en parametre dans l'url
  const { name } = useParams();

  // On effectue la requete vers l'API pour avoir les informations sur le pays passe en parametre
  const fetchCountryDatas = async (countryName) => {
    setIsLoading(true);
    // On essais de faire la requete
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );

      //   On met a jour le contenu du state 'country' avec  l'objet qu'on a eu  la requete
      setCountry(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  //   On lance la fonction pour recuperer les infromations une fois que le composant est charge
  React.useEffect(() => {
    fetchCountryDatas(name);
    console.log(`country name : ${name}`);
  }, []);

  return (
    <>
      <div className="h-screen py-4 ">
        <h1 className="border-2 py-4 text-lg font-bold px-2">
          COUNTRY API INTEGRATION/ DETAILS{" "}
        </h1>

        <div className="border-2 px-2 py-4 my-2 flex flex-wrap gap-x-8 gap-y-4 justify-evenly">
          {/* On verifie que la variable country n'est pas vide */}
          {isLoading === true ? (
            <p> En cours de chargement veuillez patientez... </p>
          ) : (
            country &&
            //   Si elle n'est pas vide on parcours chaque element de notre tableau ATTENTION il ne contient qu'un seul objet
            country.map((item) => (
              // On affiche sur la page les informations recuperees sur la page web
              <div>
                <img src={" " + item.flags.png} alt="country flag" />
                <p>
                  {" "}
                  <span className="underline font-bold">Name :</span>
                  {" " + item.name.official}
                </p>
                <h1>
                  <span className="underline font-bold">Population :</span>
                  {" " + item.population}
                </h1>
                <p>
                  <span className="underline font-bold">Language(s) :</span>
                  <ul>
                    {Object.entries(item.languages).map(
                      ([key, value], index) => (
                        <li>{value}</li>
                      )
                    )}
                  </ul>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Details;
