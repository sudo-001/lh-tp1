import React from "react";

function Mention(props) {

    let note = props.note;
    let result = "Erreur veuillez entrez un nombre !";

    if (note <10) {
        result = 'Echec';
    } else if (note >= 10 && note <12 ) {
        result = 'Passable';
    } else if (note >= 12 && note <14 ) {
        result = 'Assez-Bien';
    } else if (note >= 14 && note <16 ) {
        result = 'Bien';
    } else if (note >= 16 && note <18 ) {
        result = 'Tres Bien';
    } else if (note >= 18 && note <20 ) {
        result = 'Excellent';
    } 

    return (
        <>
            <p>Votre mention est : {result} </p>
        </>
    )
}

export default Mention;