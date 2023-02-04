import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

function Card(props) {
   console.log(props);
   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if(fav.detailId === props.detailId){
            setIsFav(true)
         }
      });
   },[props.myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.detailIid)
      }
      else{
         setIsFav(true)
         props.addFavorite(props)
      }
   }


   return (
      <div className={styles.contenedor}>
         <div className={styles.botones}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>💛</button>
            )
         }
         <button onClick={props.onClose} className={styles.boton}>X</button>
         </div>
         <h2>Nombre: {props.name}</h2>
         <Link to={`/detail/${props.detailId}`}>
            <img  src={props.image} alt="imagen principal" />
         </Link>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
      </div>
   );
}

export const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (personaje) => {
         dispatch(addFavorite(personaje))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);