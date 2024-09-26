import React from "react";
import Button from "../../global/Button";
import { Link } from "react-router-dom";

function CountryCard(props) {
  // React.useEffect(console.log(props.language), []);
  return (
    <>
      <Link
        to={`/details/${props.name}`}
        className=" flex flex-col w-[20rem] rounded-md gap-y-4 flex-wrap"
      >
        <div className="bg-purple-600 rounded-lg flex items-center justify-center py-14 hover:scale-105 transition-all duration-150 ease-linear">
          <p className="text-white font-bold text-xl uppercase">{props.timezone}</p>
        </div>

        <div className="flex ">
          <div className="w-1/4 flex justify-center items-center rounded-full">
            {/* <p className="">{props.flag}</p> */}
            <img
              src={props.flag}
              alt="country"
              className="w-10 h-10 rounded-full"
            />
          </div>

          <div className=" w-3/4 ">
            <p className="text-black font-medium">{props.name}</p>
            <p className="text-gray-800">{props.capital}</p>
          </div>
        </div>

        {/* <Button href={`/details/${props.name}`} label="Voir plus" /> */}
      </Link>
    </>
  );
}

export default CountryCard;
