import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function infoNaTela () {
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((resposta) => resposta.json())
            .then((resultadoConsulta) => {
                setPersonagem(resultadoConsulta);
            });
    }, [id]);

    return(
        <div>
            <h1>Informações:</h1>
            <p style={{fontWeight:"bold"}}>Nome:</p>
            <p>{personagem.name}</p>
            
            <br /><br />

            <p style={{fontWeight:"bold"}}>Imagem:</p>
            <img src={personagem.image} alt={personagem.name} />

            <br /><br />

            <p style={{fontWeight:"bold"}}>Status:</p>
            <p>{personagem.status}</p>

            <br /><br />

            <p style={{fontWeight:"bold"}}>Species:</p>
            <p>{personagem.species}</p>

            <br /><br />

            <p style={{fontWeight:"bold"}}>Type:</p>
            <p>{personagem.type}</p>

            <br /><br />

            <p style={{fontWeight:"bold"}}>Gender:</p>
            <p>{personagem.gender}</p>

            <br /><br />

            <p style={{fontWeight:"bold"}}>Origin:</p>
            <p>{personagem.origin.name}</p>

            <br /><br />

            <p style={{fontWeight:"bold"}}>Location:</p>
            <p>{personagem.location.name}</p>
        </div>
    );
}

export default infoNaTela;