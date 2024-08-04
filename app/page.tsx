import styles from "./page.module.css";
import Category from '@/app/components/item-category/page'
import Card from '@/app/components/items/page'
import { Button } from '@/app/components/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.cards}>
                <Category></Category>
            </div>

            <div className={styles.button}>
                <Button>Edit</Button>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.header}>
                <h3 className={styles.logout}>logout</h3>
            </div>
            <div className={styles.cards}>
                <Card></Card>
            </div>
        </div>
    </div>
  );
}
