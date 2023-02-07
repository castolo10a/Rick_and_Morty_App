const regexUser = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function validation(userData){
    let errors = {}

    if(!regexUser.test(userData.username)){
        errors.username = "El usuario debe ser un email"
    }
    if(!userData.username){
        errors.username = "El nombre de usuario no puede estar vacío"
    }
    if(userData.username.length > 35){
        errors.username = "El nombre de usuario no puede tener mas de 35 caracteres"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe tener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }
    return errors;
}