import React from 'react';
import { Board } from './cardboard/board';
import { Card } from './cardboard/card';

function BasicApp(){

    const data = [
        {
            "username" : "Gipszkarton Emil",
            "favorite pet" : "parrot"

        },
        {
            "username" : "Kittikém",
            "favorite pet" : "cat"

        }
    ];

    return <>
        <title>Cardboard example</title>
        <Board example={ data[0] }>
            {
                data.map( obj => 
                    <Card fields={obj} />
                )
            }
        </Board>

    </>

}

export { BasicApp };