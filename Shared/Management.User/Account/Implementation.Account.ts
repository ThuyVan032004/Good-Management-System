import { ChangeEvent, FormEvent } from "react";
import AccountOps, { Account } from "./Interface.Account";
import axios from "axios";
import { loginRoute, registerRoute } from "@/Shared/Api/APIRoutes";

export default class User implements AccountOps {
    private user : Account
    constructor() {
        this.user = {
            username : "",
            email : "",
            password : "",
        }
    }

    getUserInfo(): Account {
        if(this.user.confirmPassword === '')
        {
            return {
                username : this.user.username,
                email : this.user.email,
                password : this.user.password
            }
        }
        return {
            username : this.user.username,
            email : this.user.email,
            password : this.user.password,
            confirmPassword : this.user.confirmPassword
        }
    }

    setUsername(event: ChangeEvent<HTMLInputElement>): void {
        this.user.username = event.target.value
    }

    setEmail(event: ChangeEvent<HTMLInputElement>): void {
        this.user.email = event.target.value
    }

    setPassword(event: ChangeEvent<HTMLInputElement>): void {
        this.user.password = event.target.value
    }

    setConfirmPassword(event: ChangeEvent<HTMLInputElement>): void {
        this.user.confirmPassword = event.target.value
    }

    handleRegisterValidation(): boolean {
        if(this.user.username.length < 5)
        {
            alert("Username must be at least 5 characters")
            return false
        }

        if(this.user.confirmPassword !== this.user.password)
        {
            alert("Password and Confirm Password must be the same")
            return false
        }

        if(this.user.password.length < 8)
        {
            alert("Password must contain at least 8 characters")
            return false
        }
        return true
    }

    async handleRegisterSubmit(event: FormEvent<HTMLButtonElement>): Promise<void> {
        event.preventDefault()
        if(this.handleRegisterValidation())
        {
            const { data } = await axios.post(registerRoute, {
                username : this.user.username,
                email : this.user.email,
                password : this.user.password
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

    async handleLoginSubmit(event: FormEvent<HTMLButtonElement>): Promise<void> {
        event.preventDefault()
        if(this.user.username === "")
        {
            alert("Username required")
        }

        if(this.user.password === "")
        {
            alert("Password required")
        }

        const { data } = await axios.post(loginRoute, {
            username : this.user.username,
            password : this.user.password
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