import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css"

export default function Form(props){
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }

    return(
      <div className={styles.contenedor}>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input
                name="username"
                type="text"
                value={userData.username}
                onChange={handleInputChange}
                className={styles.input}
                />
                {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
        </div>
        <div>
            <label>Password:</label>
            <input
            name="password"
             type="password"
             value={userData.password}
             onChange={handleInputChange}
             className={styles.input}
             />
             {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
        </div>
        <button className={styles.boton}>LOGIN</button>
      </form>
      </div>
    )
}