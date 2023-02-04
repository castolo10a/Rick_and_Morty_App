import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={styles.contenedor}>
         {characters.map((personaje) => <Card
               detailId={personaje.id}
               key={personaje.name} 
               name={personaje.name}
               species={personaje.species}
               gender={personaje.gender}
               image={personaje.image}
               onClose={() => onClose(personaje.id)}
            /> 
         )}
      </div>
   );
}
