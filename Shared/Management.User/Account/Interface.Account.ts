import { ChangeEvent, FormEvent, ReactEventHandler } from "react"

export interface Account {
    username : string
    email : string
    password : string
    confirmPassword? : string
}

export default interface AccountOps {
    getUserInfo() : Account
    setUsername(event : ChangeEvent<HTMLInputElement>) : void
    setEmail(event : ChangeEvent<HTMLInputElement>) : void
    setPassword(event : ChangeEvent<HTMLInputElement>) : void
    setConfirmPassword(event : ChangeEvent<HTMLInputElement>) : void
    handleRegisterValidation() : boolean
    handleRegisterSubmit(event : FormEvent<HTMLButtonElement>) : Promise<void>
    handleLoginSubmit(event : FormEvent<HTMLButtonElement>) : Promise<void> 
}