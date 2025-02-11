import React from 'react';
import styles from './cardboard.module.css';

function Board({ children }){
    
    return <div className={ styles.board }>
        {children}

    </div>

}

export { Board };
