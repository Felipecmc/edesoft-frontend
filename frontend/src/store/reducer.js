import { users } from "../database"
export default function usersReducer(state = users, action){
    switch(action.type){
        case "ADD":
            return action.users
        case "REMOVE":
            return action.users
        case "UPDATE":
            return action.users
        default:
            return state
    }
}