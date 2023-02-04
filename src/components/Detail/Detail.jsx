import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
          <Link to={"/Home"}>
            <button className={styles.boton}>volver</button>
          </Link>
        {
            character ? (
                <div className={styles.info}>
                    <div className={styles.caracteristicas} >
                        <h1>Nombre: {character.name}</h1>
                        <h3>Status: {character.status}</h3>
                        <h3>Specie: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                    </div>
                    <div>
                        <img className={styles.img} src={character.image} alt={character.name} />
                    </div>
                </div>
            ) : ("No existe el personaje")
        }
        </div>
    )
}