'use client'

import background from '../../public/circle.png'
import { Button } from '../components/button/button'
import Image from 'next/image'
import styles from '@/app/register/page.module.css'
import Link from 'next/link'
import User from '@/Shared/Management.User/Account/Implementation.Account'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Register() {
    let user = new User()
    const router = useRouter()  

    useEffect(() => {
        if(localStorage.getItem("user"))
        {
            router.push('/')
        }
    })

    return (
        <form 
            action="" 
            className={styles.form}
            onSubmit={user.handleRegisterSubmit}>
            <Image 
                src={background}
                alt=''
                width={600}
                height={600}
                />

            <div className={styles.main}>
                <div className={styles.title}>SIGN UP</div>
                <input 
                type="text" 
                name="username" 
                id="" 
                placeholder="username"
                onChange={user.setUsername}
                className={styles.input} />
                
                <input 
                type="email" 
                name="email" 
                id="" 
                placeholder="email"
                onChange={user.setEmail}
                className={styles.input} />

                <input 
                type="password" 
                name="password" 
                id="" 
                placeholder="password"
                onChange={user.setPassword}
                className={styles.input} />

                <input 
                type="password" 
                name="confirm-password" 
                id="" 
                placeholder="Confirm password"
                onChange={user.setConfirmPassword}
                className={styles.input} />
                <Button 
                type="submit">
                    sign up
                </Button>
                <div className={styles.footer}>
                        Already have an account? 
                        &nbsp;
                        <Link href="/login" className={styles.login}>Login</Link>
                </div>
            </div>
        </form>
    )
}
