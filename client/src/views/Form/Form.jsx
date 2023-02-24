import { useState } from "react";
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

  const changeHandler =(event)=>{
    const property = event.target.name
    const value = event.target.value

    setForm({...form, [property]:value})
  }

  const validate = ()=>{
    
  }
  return (
    <form>
      <div>
        <label htmlFor="">Name: </label>
        <input type="text" value={form.name} onChange={changeHandler} name="name"/>
      </div>

      <div>
        <label htmlFor="">Image: </label>
        <input type="text" value={form.image} onChange={changeHandler} name="image"/>
      </div>

      <div>
        <label htmlFor="">HP: </label>
        <input type="text" value={form.hp} onChange={changeHandler} name="hp"/>
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
    </form>
  );
};

export default Form;
