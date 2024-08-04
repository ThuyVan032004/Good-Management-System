import { ChangeEvent, FormEventHandler, FormEvent } from "react";
import Account from "@/Shared/Management.User/Account/Interface.Account";
import axios from "axios";
import { loginRoute, registerRoute } from "@/Shared/Api/APIRoutes";

export default class User implements Account {
    username : string
    email : string
    password : string
    confirmPassword? : string
    constructor() {
        this.username = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
    }

    setUsername = (event: ChangeEvent<HTMLInputElement>): void => {
        this.username = event.target.value 
    }

    setEmail = (event: ChangeEvent<HTMLInputElement>): void => {
        this.email = event.target.value
    }

    setPassword = (event: ChangeEvent<HTMLInputElement>): void => {
        this.password = event.target.value
    }

    setConfirmPassword = (event: ChangeEvent<HTMLInputElement>): void => {
        this.confirmPassword = event.target.value
    }

    handleRegisterValidation = () : boolean => {
        if(this.username.length < 5)
        {
            alert("Username must be at least 5 characters")
            return false
        }

        if(this.confirmPassword !== this.password)
        {
            alert("Password and Confirm Password must be the same")
            return false
        }

        if(this.password.length < 8)
        {
            alert("Password must contain at least 8 characters")
            return false
        }
        return true
    }

    handleRegisterSubmit = async (event : FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        if(this.handleRegisterValidation())
        {
            const { data } = await axios.post(registerRoute, {
                username : this.username,
                email : this.email,
                password : this.password
            })

            if(data.status === false) 
            {
                alert(data.msg)
            }
            
            if(data.status === true) 
            {
                localStorage.setItem("user", JSON.stringify(data.user))
            }
        }
    }

    handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) : Promise<void> => {
        event.preventDefault()
        if(this.username === "")
        {
            alert("Username required")
        }

        if(this.password === "")
        {
            alert("Password required")
        }

        const { data } = await axios.post(loginRoute, {
            username : this.username,
            password : this.password
        })

        if(data.status === false) 
        {
            alert(data.msg)
        }
        
        if(data.status === true) 
        {
            localStorage.setItem("user", JSON.stringify(data.user))
        }
    }
}