import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout(){
    return <>
        <nav><ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/basic">Basic</Link>
            </li>
            <li>
                <Link to="/crud">CRUD</Link>
            </li>
        </ul></nav>
        <Outlet />
    </>
}

export { Layout };