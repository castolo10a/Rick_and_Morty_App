import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";



export default function Nav(props){

    const {onSearch} = props;

    return (
        <div className={styles.nav}>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
            <Link to="/Home">
                <button className={styles.boton}>Home</button>
            </Link>

            <Link to="/about">
                <button className={styles.boton}>About</button>
            </Link>

            <Link to="/favorites">
                <button className={styles.boton}>Favorites</button>
            </Link>

            <Link to="/">
                <button className={styles.botonSalir}>Logout</button>
            </Link>
        </div>
    )
}