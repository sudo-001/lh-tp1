import React from 'react';

function SommeAffiche(props) {
    // let a, b;
    // let result;

    // a = Math.random();
    // b = 20;

    let result = props.a + props.b;

    // function rnd(note) {
    //     if ( note < 10 ) {
    //         result = 0;
    //     } else {
    //         result = 1;
    //     }

    //     return result;
    // }


    return (
        <div>
            Valeur de result : {result}
        </div>
    )
}

export default SommeAffiche;