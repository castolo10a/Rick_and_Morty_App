import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input 
            type='search'
            className={styles.input}
            onChange={handleChange}
         />
         <button 
            onClick={() => props.onSearch(character)}
            className={styles.boton}>
               Agregar
         </button>
      </div>
   );
}
