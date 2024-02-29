import { Children, useState } from 'react'
import userDataContext from './userContext'


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        {
            islogged: false,
            message: "",
            userInfo: {}
        })


    const login = async (data, password) => {
        const res = await fetch("http://localhost:8000/api/v1/users/login", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data, password }),
        });

        const User = await res.json();

        if (User.statusCode >= 400) return setUser({
            islogged: false, message: User.data.Data, userInfo: {}
        })


        const { avatar, fullName, username, coverImage } = User.data.sendUser

        return setUser({
            islogged: true,
            message: "Success",
            userInfo: {
                avatar,
                fullName,
                username,
                coverImage
            }
        })



    }


    return (
        <userDataContext.Provider value={{ login, user }}>
            {children}
        </userDataContext.Provider >
    )

}