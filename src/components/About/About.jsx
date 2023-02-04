import styles from "./About.module.css";

export default function About(){
    return (
        <div className={styles.contenedor}>
            <div className={styles.contenedorUno}>
                <h2>Hola, mi nombre es Daniel Eduardo Castillo😎</h2>
                <h3>Soy Administrador de Empresas y actualmente <br/> curso la carrera Full-Stack Developer en Henry</h3>
                <p className={styles.parrafo}>En esta sección les quiero contar que esta es mi primera aplicación creada <br/> desde cero con React-Redux. Con este proyecto pongo en práctica mis <br/> conocimientos y los refuerzo a la vez, con el tiempo le haré las modificaciones <br/> correspondientes, por ahora espero les guste el proyecto 🙌👋</p>
            </div>
            <img src="" alt="Foto del perfil" />
        </div>
    )
}