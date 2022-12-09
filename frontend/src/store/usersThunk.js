import { addUserAction, removeUserAction, updateUserAction } from "./actions"

export const removeUser = (id) => {
    return(dispatch, getState) => {
        const {users} = getState()
        const newUsers = users.filter((user) => user.id !== id)

        return dispatch(removeUserAction(newUsers))
    }
}

export const addUser = (user) => {
    return(dispatch, getState) => {
        const {users} = getState()
        if(user.id === 1){
            user.id = 0
        } 
        return dispatch(addUserAction([...users, user]))
    }
}

export const updateUser = (userData) => {
    return(dispatch, getState) => {
        const {users} = getState()
        let newUsers = []
        for(let i = 0; i < users.length; i++){
            if(users[i].id == userData.id){
                newUsers.push(userData)
            }else{
                newUsers.push(users[i])
            }
        }console.log({users: newUsers})
        return dispatch(updateUserAction([...newUsers]))
    }
}