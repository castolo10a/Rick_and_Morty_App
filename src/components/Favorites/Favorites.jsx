import { useDispatch, useSelector } from 'react-redux';
import styles from './Favorites.module.css';
import {orderCards, filterCards} from '../../redux/actions';


const Favorites = (props) => {

    const {myFavorites} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    
    return(
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <h2>My Favorites</h2>
            <div className={styles.contenedor}>
                {   
                    myFavorites?.map((personaje) => (
                            <div className={styles.personaje}>
                                <h2>Nombre: {personaje.name}</h2>
                                <img  src={personaje.image} alt="imagen principal" />
                                <h2>Specie: {personaje.species}</h2>
                                <h2>Gender: {personaje.gender}</h2>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}


export default Favorites;