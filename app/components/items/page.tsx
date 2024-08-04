import styles from '@/app/components/items/page.module.css'
import { Button } from '../button/button'
import Image from 'next/image'
import Edit from '@/public/edit.png'
import Delete from '@/public/x-mark.png'
import Background from '@/public/card-background.png'

export default function Card() {
  return (
    <div className={styles.item}>
        <div className={styles.header}>
            <Image src={Edit} alt='' className={styles.icon} />
            <Image src={Delete} alt='' className={styles.icon} />
        </div>
        
        <div className={styles.card}>
            <div className={styles.main}>
                <div className={styles.upload_img}>
                    <Button className={styles.button}>Upload Image</Button>
                </div>

                <div className={styles.content}>
                    <span>
                        Name: 
                        &nbsp;
                        <input
                        type="text" 
                        name="name" 
                        id="" 
                        placeholder='item name' 
                        className={styles.input} />
                    </span>

                    <br />

                    <span>
                        Count: 
                        &nbsp;
                        <input
                        type="text" 
                        name="count" 
                        id="" 
                        placeholder='number of items'
                        className={styles.input} />
                    </span>

                    <br />

                    <span>
                        Name: 
                        &nbsp;
                        <input
                        type="text" 
                        name="price" 
                        id="" 
                        placeholder='item price'
                        className={styles.input} />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
