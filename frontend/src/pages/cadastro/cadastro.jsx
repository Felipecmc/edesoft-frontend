import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    Button,
    Paper,
    TextField,
  } from "@mui/material";
import { useHistory } from "react-router-dom"
import { addUser } from "../../store/usersThunk";
import { useDispatch } from "react-redux";
import axios from 'axios'
import {Link} from 'react-router-dom'

export const  Cadastro = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const schema = yup.object().shape({
        username: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters")
          .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
          "O nome deve ter apenas letras."),
          lastName: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters")
          .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
          "O nome deve ter apenas letras."), 
          zipcode: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
          city: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
          street: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
          number: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
          latitude: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
          longitude: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
          phone: yup
          .string()
          .required("Require field!")
          .min(3, "Minimum 3 characters"),
        email: yup.string().required("Require field!").email("O Formato do email é inválido"),
        password: yup
          .string()
          .required("Require field!")
          .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "Password must contain at least one capital letter, one number and one special character!"
          )
          .min(8, "Minimo de 8 caracteres"),
      })

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema)});


      async function create (data) {
        const jsonData = {
            email:data.email,
            username:data.username,
            password:data.password,
            name:{
                firstname:data.firstName,
                lastname:data.lastName
            },
            address:{
                city:data.city,
                street:data.street,
                number:data.number,
                zipcode:data.zipcode,
                geolocation:{
                    lat:data.latidude,
                    long:data.longitude
                }
            },
            phone:data.phone
        }
        await axios.post('https://fakestoreapi.com/users', jsonData)
          .then(res => jsonData.id = res.data.id)
          .then(res => {
            dispatch(addUser(jsonData, dispatch))
            history.push("/lista")
          })
      }
    
    return(
      <>
      <h3>Criar Usuário</h3>
      <Paper className="paper" elevation={3}>
      <form onSubmit={handleSubmit(create)}>
          <TextField 
           id="standard-basic"
           label="username" 
           variant="standard" 
           required
           error={!!errors.username}
           {...register("username")}
           />
           <TextField 
           id="standard-basic"
           label="phone" 
           variant="standard" 
           required
           error={!!errors.phone}
           {...register("phone")}
           />
          <TextField 
           id="standard-basic"
           label="first name" 
           variant="standard" 
           required
           error={!!errors.firstName}
           {...register("firstName")}
           />
          <TextField 
           id="standard-basic"
           label="last name" 
           variant="standard" 
           required
           error={!!errors.lastName}
           {...register("lastName")}
           />
          <TextField id="standard-basic"
           label="email" 
           variant="standard" 
           required
           error={!!errors.Email}
           {...register("email")} />
           <TextField 
           id="standard-basic"
           label="cidade" 
           variant="standard" 
           required
           error={!!errors.usename}
           {...register("city")}
           />
           <TextField 
           id="standard-basic"
           label="zipcode" 
           variant="standard" 
           required
           error={!!errors.zipcode}
           {...register("zipcode")}
           />
           <TextField 
           id="standard-basic"
           label="street" 
           variant="standard" 
           required
           error={!!errors.street}
           {...register("street")}
           />
           <TextField 
           id="standard-basic"
           label="number" 
           variant="standard" 
           required
           error={!!errors.number}
           {...register("number")}
           />
           <TextField 
           id="standard-basic"
           label="latitude" 
           variant="standard" 
           required
           error={!!errors.latitude}
           {...register("latitude")}
            />
            <TextField 
           id="standard-basic"
           label="longitude" 
           variant="standard" 
           required
           error={!!errors.longitude}
           {...register("longitude")}
           />
          <TextField id="standard-basic"
           label="password" 
           variant="standard" 
           required
           error={!!errors.password}
           {...register("password")} />
          <Button type="submit" onClick={handleSubmit(create)}>
              Criar Conta
          </Button>
      </form>
  </Paper>
  </>
    )
}