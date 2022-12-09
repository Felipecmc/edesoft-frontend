export const removeUserAction = (users) => {
    return(
        {
            type: "REMOVE",
            users
        }
    )
}


export const addUserAction = (users) => {
    return (
        {
            type: "ADD",
            users
        }
    )
}

export const updateUserAction = (newUsers) => {

    return (
        {
            type: "UPDATE",
            users: newUsers
        }
    )
}