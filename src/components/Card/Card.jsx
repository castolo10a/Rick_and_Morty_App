import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.contenedor}>
         <button onClick={props.onClose} className={styles.boton}>X</button>
         <h2>Nombre: {props.name}</h2>
         <img  src={props.image} alt="imagen principal" />
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
      </div>
   );
}
