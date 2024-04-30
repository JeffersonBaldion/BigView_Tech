import React from "react";
import style from "./Login.module.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()  
  const [title, setTitle] = React.useState("Iniciar sesión");
  const [register, setRegister] = React.useState({Name:"", Email:"", Password:""});
 
  const handleChangeForm = (e)=>{
    setRegister({Name:"", Email:"", Password:""})
    setTitle(e.target.name)
  }

  const formChange = (e)=>{
    const {name, value} = e.target
    setRegister({...register, [name]:value})
  }

  const registerRequest = async()=>{
    if(register.Name && register.Email && register.Password){
        try {
            await axios.post("http://localhost:3000/user/newUser", register)
            setTitle("Iniciar sesión")
        } catch (error) {
            alert(error)
        } 
    }
  }

  const loginRequest = async()=>{
    if(register.Email && register.Password){
        try {
            console.log(sessionStorage.getItem("Email"))
            const response = await axios.post("http://localhost:3000/user/getUser", {Password:register.Password, Email:register.Email})
            console.log(response)
            if(response.data.isSuccess){
                sessionStorage.setItem("Email", register.Email);
                navigate("/home")
            }else{
                setRegister({Name:"", Email:"", Password:""})
            }
        } catch (error) {
            
        }
    }
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.loginContainer}>
        <h2>{title}</h2>
        {title == "Registrarse" ? (
          <div className={style.inputContainer}>
            <label htmlFor="">Nombre</label>
            <input name="Name" onChange={formChange} value={register.Name} type="text" />
          </div>
        ) : null}
        <div className={style.inputContainer}>
          <label htmlFor="">Correo Electronico</label>
          <input name="Email" onChange={formChange} value={register.Email} type="text" />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="">Contraseña</label>
          <input name="Password" onChange={formChange} value={register.Password} type="password" />
        </div>
        <div className={style.buttonsContainer}>
          {title=="Registrarse"? <button onClick={registerRequest}>Registrarse</button> :<button onClick={loginRequest}>Iniciar sesión</button>}
          {title=="Registrarse"?<button name="Iniciar sesión" onClick={handleChangeForm}>Login</button>:<button name="Registrarse" onClick={handleChangeForm}>Registrarse</button>}
        </div>
      </div>
    </div>
  );
}
