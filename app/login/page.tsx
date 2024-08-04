import background from '../../public/circle.png'
import { Button } from '../components/button/button'
import Image from 'next/image'
import styles from '@/app/login/page.module.css'
import Link from 'next/link'
import User from '@/Shared/Management.User/Account/Implementation.Account'

export default function Login() {
    let user = new User()

    return (
        <form action="" className={styles.form}>
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
                onChange={() => {user.setUsername}}
                className={styles.input} />
                
                <input 
                type="password" 
                name="password" 
                id="" 
                placeholder="password"
                onChange={() => {user.setPassword}}
                className={styles.input} />
                <Button 
                type="submit"
                onSubmit={() => {user.handleLoginSubmit}}>
                    login
                </Button>
                <div className={styles.footer}>
                        Don&apos;t have an account? 
                        &nbsp;
                        <Link href="/register" className={styles.login}>Create</Link>
                </div>
            </div>
        </form>
    )
}
