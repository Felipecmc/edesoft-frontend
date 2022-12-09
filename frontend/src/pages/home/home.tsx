import { useHistory} from "react-router-dom";
import { Button,
Paper,
TextField,
} from "@mui/material";

export const Home = () => {
    const navigate = useHistory();

    return(
        <main>
            <div className="navButton">
            <Button className="navButton"  variant="contained" onClick ={() => navigate.push("lista/")}>
                listar usuários
            </Button>
            </div>
            <div className="navButton">
            <Button   variant="contained" onClick ={() => navigate.push("cadastro/")}>
                cadastrar usuários
            </Button>
            </div >
        </main>
    )
}