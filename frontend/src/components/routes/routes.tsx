import { Route, Switch} from "react-router-dom";
import { Home } from "../../pages/home/home";
import { Lista } from "../../pages/lista/lista";
import { Cadastro } from "../../pages/cadastro/cadastro"
import { Editar } from "../../pages/editar/editar";

export const Router = () => {
    return (
        <Switch>
                <Route exact path = "/"><Home/></Route>
                <Route exact path = "/lista"><Lista/></Route>
                <Route exact path = "/cadastro"><Cadastro/></Route>
                <Route exact path = "/editar/:id"><Editar/></Route>
        </Switch>
    )
}