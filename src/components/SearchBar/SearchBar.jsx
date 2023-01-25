import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' className={styles.input} />
      <button onClick={props.onSearch} className={styles.boton}>Agregar</button>
      </div>
   );
}
