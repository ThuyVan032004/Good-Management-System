import { ChangeEvent, FormEvent } from "react"

export default interface Account {
    username : string
    email : string
    password : string
    confirmPassword? : string

    setUsername(event : ChangeEvent<HTMLInputElement>) : void
    setEmail(event : ChangeEvent<HTMLInputElement>) : void
    setPassword(event : ChangeEvent<HTMLInputElement>) : void
    setConfirmPassword(event : ChangeEvent<HTMLInputElement>) : void
    handleRegisterValidation() : boolean
    handleRegisterSubmit(event : FormEvent<HTMLFormElement>) : Promise<void>
    handleLoginSubmit(event : FormEvent<HTMLFormElement>) : Promise<void> 
}
