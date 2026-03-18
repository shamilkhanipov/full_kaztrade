import styles from "./Advantages.module.css";

export default function Advantages(){
    return(
        <section className={styles.advantages}>
            <div className={styles.container}>
                <ul className={styles.advantages_list}>

                    <li>
                        <span>2018</span>
                        Год основания компании
                    </li>

                    <li>
                        <span>2 500+</span>
                        Доставленных автомобилей
                    </li>

                    <li>
                        <span>14 дней</span>
                        Средний срок доставки
                    </li>

                    <li>
                        <span>100%</span>
                        Страховое покрытие груза
                    </li>

                </ul>
            </div>
        </section>
    )
}