import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>Rick and Morty</h1>
            <Link to={'/consulta-ram'}>Consulta Rick and Morty</Link>
            <Outlet /> 
        </>
    );
}
export default Cabecalho;
