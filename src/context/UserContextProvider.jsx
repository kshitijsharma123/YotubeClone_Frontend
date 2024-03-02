import { useState } from 'react'
import userDataContext from './userContext'
import axios from 'axios';


export const UserContextProvider = ({ children }) => {
    const baseULR = 'http://localhost:8000/api/v1/'

    const [userStatus, setUserStatus] = useState(
        {
            islogged: false,
            message: "",

        })
    const [user, setUser] = useState({
        islogged: false,
        avatar: "",
        coverImage: "",
        fullName: "",
        username: ""
    })

    const [logoutStatus, setlogoutStatus] = useState()


    const login = async (data, password) => {
        try {
            const res = await axios.post(`${baseULR}users/login`,
                { data, password }, {
                headers: {
                    "Content-Type": "application/json",
                }, withCredentials: true


            });

            setUserStatus({
                islogged: true,
                message: "Success",

            })
            console.log(res)

        } catch (err) {
            const { response } = err

            if (response.status >= 400) {
                setUserStatus({
                    islogged: false,
                    message: response.data.data.Data
                })
            }
        }
    }

    const getUser = async () => {

        try {
            const res = await axios.get(`${baseULR}users/My-Profile`, {
                withCredentials: true
            });
            if (res.status === 200) {
                const { username, fullName, avatar, coverImage } = res.data.data[0];


                setUser({
                    islogged: true,
                    avatar: avatar,
                    coverImage: coverImage,
                    fullName: fullName,
                    username: username

                })
            }

        } catch (error) {
            console.log(error.message)
        }


    }

    const logout = async () => {

        try {
            const res = await axios.post(`${baseULR}users/logout`, {}, {
                withCredentials: true
            });
            console.log("runining logout function")
            if (res.status === 200) setlogoutStatus(true);

            console.log({ res })
        } catch (error) {
            if (error.request >= 400) {
                setlogoutStatus(false)
            } else if (error.request >= 500) {
                window.location.href = "/server-error"
            }

        }
    }

    return (
        <userDataContext.Provider value={{
            login,
            userStatus,
            getUser
            , user,
            logout,
            logoutStatus
        }}>
            {children}
        </userDataContext.Provider >
    )

}