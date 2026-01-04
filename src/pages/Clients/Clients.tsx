import { NavLink, Outlet } from "react-router-dom";




function Clients() {
    return (
        <div style={{padding: "40px"}}>
        <h1>Clients</h1>

        <ul>
            <li>
                <NavLink to="deutscheTelekom">DeutscheTelekom</NavLink>
            </li>

            <li>
                <NavLink to="siemens">Siemens</NavLink>
            </li>

            <li>
                <NavLink to="volkswagen">Volkswagen</NavLink>
            </li>
        </ul>
        
        <Outlet />
        
        </div>
    );
}

export default Clients;