import React from "react";

function LiveText() {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    console.log(e);
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        name="text"
        id="text"
        cols={55}
        rows={10}
        onChange={handleChange}
      ></textarea>
      <br />
      <p>Resultat saisie : {text}</p>
    </>
  );
}

export default LiveText;

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://jobs-api14.p.rapidapi.com/get?id=%5BJOB_ID%5D&language=en_GB');
// xhr.setRequestHeader('x-rapidapi-key', 'Sign Up for Key');
// xhr.setRequestHeader('x-rapidapi-host', 'jobs-api14.p.rapidapi.com');

// xhr.send(data);