import axios from "axios"
import { useState } from "react";
import { getTypes } from "../../redux/actions";
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    image:"",
    hp:"",
    attack: "",
    defense: "",
    speed:"",
    types:[]
  });

  const [errors,  setErrors] =useState({
    name: "",
    image:"",
    hp:"",
    attack: "",
    defense: "",
    speed:"",
    types:""
  })

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); //Estado para que el Botón de submit este desabilitado si hay un campo incorrecto


  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    /* Comprobando si la entrada está vacía o no. */
    const isInputValid = value !=="";
    validate({ ...form, [property]: value }); //hace que tanto lo que escribo como lo que se ve en      
    validateHP({...form, [property]: value})      
    setForm({ ...form, [property]: value });  //redux devtools se vea a la par 
    setSubmitButtonDisabled(!isInputValid)
  };

  //defino una función llamada "validate", que toma como argumento el estado "form"
  const validate = (form) => {
    if (/^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/.test(form.name)) {
      setErrors({ ...errors, name: "Nombre correcto" }); //el estado "setErrors" se utiliza para actualizar el 
    } else {                                               //objeto "errors" con el nuevo mensaje de error para 
      setErrors({ ...errors, name: "Hay un error en nombre" }); //el campo "nombre".
    }
    if (form.name === "") setErrors ({ ...errors, name: "Nombre vacio" });
  };

  const validateHP = (form)=>{
    if (!/^\d*$/.test(form.hp)) {
      setErrors({ ...errors, hp: "Hay un error en HP" });
    } else{
      setErrors({ ...errors, hp: "Correcto" });
    }
    if (form.hp === "") setErrors({ ...errors, hp: "HP vacio" });
  }
  //el estado "setErrors" se utiliza para actualizar el objeto "errors" con el nuevo mensaje de error para el campo "nombre".

  const handleSubmit=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3001/pokemons", form)
    .then(res=>alert("Pokemon Creado ",res))
  }


  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name: </label>
        <input type="text" value={form.name} onChange={changeHandler} name="name"/>
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="">Image: </label>
        <input type="text" value={form.image} onChange={changeHandler} name="image"/>
       
      </div>

      <div>
        <label htmlFor="">HP: </label>
        <input type="text" value={form.hp} onChange={changeHandler} name="hp"/>
        {errors.hp && <span>{errors.hp}</span>}
      </div>

      <div>
        <label htmlFor="">Attack: </label>
        <input type="text" value={form.attack} onChange={changeHandler} name="attack"/>
      </div>

      <div>
        <label htmlFor="">Defense: </label>
        <input type="text" value={form.defense} onChange={changeHandler} name="defense"/>
      </div>

      <div>
        <label htmlFor="">Speed: </label>
        <input type="text" value={form.speed} onChange={changeHandler} name="speed"/>
      </div>

      <div>
        <label htmlFor="">Types: </label>
        <input type="text" value={form.types} onChange={changeHandler} name="types"/>
      </div>
      <button type="submit" disabled={submitButtonDisabled}>Submit</button>
    </form>
  );
};

export default Form;
