import { ButtonHTMLAttributes } from 'react'
import styles from '@/app/components/button/button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children : React.ReactNode, 
}

export function Button({ children, type, onClick, ...rest } : ButtonProps) {
  return (
    <button
    type = {type}
    onClick={onClick}
    className={styles.button}
    >
        {children}
    </button>
  )
}
