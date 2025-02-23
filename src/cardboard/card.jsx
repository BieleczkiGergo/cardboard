import React from 'react';
import { ReactComponent as ModifyIcon } from "./pencil.svg";
import { ReactComponent as RemoveIcon } from "./trash.svg";
import defStyles from './cardboard.module.css';

function Card({ fields, children, style=defStyles }){

    return <tr className={ style.card }>
        {
            Object.entries(fields).map( ([key, val]) => {
                return <td className={ style.cardfield_item } key={ key }>
                    <h2 className={ style.cardfield_key }> {key} </h2>
                    <p className={ style.cardfield_val } > {val} </p>

                </td>
            })
        }


        {children}
    </tr>
}

function CrudCard({ fields, children, modifyAction, removeAction, style=defStyles }){
    return <Card fields={fields} style={ style }>
        { children }

        {
            modifyAction ? <td>
                <button onClick={ modifyAction }>
                    <ModifyIcon className={ style.actionIcon }/>

                </button>
            </td> : <></>

        }
        {
            removeAction ? <td>
                <button onClick={ removeAction }>
                    <RemoveIcon className={ style.actionIcon }/>

                </button>
            </td> : <></>

        }

    </Card>

}

export { Card, CrudCard };

