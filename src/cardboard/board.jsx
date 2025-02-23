import React from 'react';
import defStyles from './cardboard.module.css';
import { ReactComponent as AddIcon } from "./add.svg";
import { ReactComponent as ReloadIcon } from "./reload.svg";

function Board({ children, example, style=defStyles }){
    
    return <table className={ style.board }>
        {
            example ? (
                <thead className={ style.board_header }>
                    <tr>
                        { 
                            Object.keys(example).map( ( key ) => <th key={ key }> {key} </th>)

                        }
    
                    </tr>
                </thead>


            ) : <></>

        }

        <tbody>
            {children}

        </tbody>

    </table>

}

function CrudBoard({ children, title, example, addAction, reloadAction, style=defStyles }){
    return <div className={ style.crudBoard } >
        <div className={ style.actions } >
            <h1>{ title }</h1>
            
            {
                addAction ? <button onClick={ addAction }>
                        <AddIcon className={ style.actionIcon }/>

                    </button> : <></>
            }
            {
                reloadAction ? <button onClick={ reloadAction }>
                        <ReloadIcon className={ style.actionIcon }/>

                    </button> : <></>
            }
        </div>

        <Board example={ example }>
            { children }

        </Board>;
    </div>
}

export { Board, CrudBoard };
