import styles from "./Contact.module.css";

export default function Contact(){
    return(
        <section className={styles.container}>
            <h2>Контакты</h2>
            <ul className={styles.contact_list}>
                {Map.map((itemContact) => (
                    <li key={itemContact.id}>
                        <div width="600px">{itemContact.img}</div>
                        <div className={styles.contact_info}>
                            <div className={styles.text}>
                                <span className={styles.title}>{itemContact.title}</span>
                                <span className={styles.subtitle}>{itemContact.subtitle}</span>
                            </div>
                            <span className={styles.number}>{itemContact.number}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

const Map = [
    {
        id: 1,
        img: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a2b98dfd99d4128c9a7dd1ab38e62e2e4efdf8311ddd240d3db41ef20912365&amp;source=constructor" width="600" height="300" frameBorder="0"></iframe>,
        title: "Офис в Набережных Челнах",
        subtitle: "Набережные Челны, 56 комплекс, 4",
        number: "+7 999 999 99 99"
    },
    {
        id: 2,
        img: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A329602e3d78d26a4d2cc86485c02513d78da1c7910dafe7880d3d0b3b8dc91c3&amp;source=constructor" width="600" height="300" frameBorder="0"></iframe>,
        title: "Офис в Москве",
        subtitle: "Москва, наб. Тараса Шевченко, 23А",
        number: "+7 999 999 99 99"
    }
]