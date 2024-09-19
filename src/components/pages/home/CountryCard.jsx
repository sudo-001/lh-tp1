import React from "react";

function CountryCard(props) {
  // React.useEffect(console.log(props.language), []);
  return (
    <div className="bg-cyan-600 border w-1/3 rounded-md">
      <div className="bg-red-600">
        <p>Image</p>
      </div>
      
      <div className="bg-purple-600 ">
        <p>
          <span className="underline">Name :</span> {props.name}
        </p>
        <p>
          <span className="underline">Capital :</span>
          {props.capital}
        </p>
        {/* <p>
          <span className="underline">Language :</span>
          <ul>
            {props.language.map((item) => (
              <li>item</li>
            ))}
          </ul>
        </p> */}
        <p>
          <span className="underline">Flag :</span> {props.flag}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
