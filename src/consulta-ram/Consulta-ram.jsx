import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function consultaRAM() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        console.log("Consultar API");
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then(resultadoConsulta => {
                setPersonagens(resultadoConsulta.results);
            });
    }, []);

    return (
        <>
            {
                personagens.map(personagem => {
                    return <div>
                        <Link to={`/informacao/${personagem.id}`}>
                            <img src={personagem.image} alt={personagem.name} />
                        </Link>
                    </div>
                })}
        </>
    );
}

export default consultaRAM;