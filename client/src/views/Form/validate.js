export const validate = (inputs) => {
    let errors = {};

    const regexName = /^([^0-9]*)$/;
    const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/
    /* Una expresión regular que comprueba si la entrada es un número. */
    const regexNumber = /^\d*$/

    if (!inputs.name) errors.name = " Se requiere un nombre ";
    if (!regexName.test(inputs.name)) errors.name = " el nombre no puede contener numeros ";
    if (!inputs.image) errors.image = " se requiere una imagen ";
    if (!regexUrl.test(inputs.image)) errors.image = " la imagen debe ser un url valido ";
    if (!inputs.hp) errors.hp = " se requiere una vida ";
    if (!regexNumber.test(inputs.hp)) errors.hp = " la vida debe ser un numero ";
    if (inputs.hp > 100) errors.hp = " el valor de la vida debe ser menor a 100 ";
    if (!inputs.attack) errors.attack = " se requiere el ataque ";
    if (!regexNumber.test(inputs.attack)) errors.attack = " el ataque debe ser un numero ";
    if (!inputs.defense) errors.defense = " se requiere una defensa ";
    if (!regexNumber.test(inputs.defense)) errors.defense = "la defensa debe ser un numero ";
    if (!inputs.speed) errors.speed = " se requiere una velocidad ";
    if (!regexNumber.test(inputs.speed)) errors.speed = " la velocidad debe ser un numero ";
    if (!inputs.types) errors.types = " se requiere un tipo ";
    if (!regexNumber.test(inputs.types)) errors.types = " el tipo debe ser un numero";
    if (inputs.types > 20) errors.types = " el valor de la vida debe ser menor a 20 ";

    return errors;
}