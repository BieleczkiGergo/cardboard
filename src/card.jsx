import React from 'react';
import styles from './cardboard.module.css';

function Card({ title, fields, children }){
    console.log(fields);
    console.log(fields.entries);

    return <fieldset className={ styles.card }>
        <legend> {title} </legend>

        <div>
            {
                Object.entries(fields).map( ([key, val]) => {
                    return <>
                        <h2> {key} </h2>
                        <p> {val} </p>

                    </>
                })
            }

        </div>

        {children}
    </fieldset>
}

export { Card };

