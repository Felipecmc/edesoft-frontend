import { removeUser } from "../../store/usersThunk"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import {
    Button,
    Paper,
  } from "@mui/material";
  import {Link} from 'react-router-dom'

export const Lista = () => {
    const history = useHistory()
    const dispatch= useDispatch()
    const users = useSelector((state) => state.users)
    console.log(users)
    const handleRemove = (id) => {
        fetch('https://fakestoreapi.com/users/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(dispatch(removeUser(id, dispatch)))
    }
    return (
        <main>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}>
                        <h4>{user.username}</h4>
                        <p>{user.name.firstname + " " + user.name.lastname}</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                        <div>
                            <Button onClick={() => handleRemove(user.id)}>deletar</Button>
                            <Button>
                                <Link to={"/editar/" + user.id}>
                                    editar
                                </Link>
                            </Button>
                        </div>

                    </li>
                ))}
            </ul>
            
        </main>
    )
}