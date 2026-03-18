import styles from "./Process.module.css"
import Image from "next/image"

export default function Process(){
    return (
        <section id="process" className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.description}>
                    <h2>Регламент работы</h2>
                    <p>Прозрачный процесс исполнения заказа от заявки до передачи ключей.</p>
                </div>
                <div className={styles.steps}>
                    <ul>
                        {stepsDesc.map((step) => (
                            <li key={step.id} style={{backgroundColor: step.bgColor}}>
                                <div className={styles.process_img}>
                                    <Image src={step.img} alt={step.title} width={40} height={40}/>
                                    <span style={{color: step.numColor}}>{step.number}</span>
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.info_title}>{step.title}</span>
                                    <p className={styles.info_desc}>{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const stepsDesc = [ 
    {
        id:1,
        number: "01",
        title: "Консультация",
        description: "Согласовываем параметры поиска, бюджет и требования к авто. Рассчитываем полную стоимость «под ключ»",
        img: "/process/step.svg",
        bgColor: "#fff",
        numColor: "#E5E7EB"
    },
    {
        id:2,
        number: "02",
        title: "Подбор авто",
        description: "Ищем варианты на площадках Казахстана и ближнего зарубежья. Подбираем варианты строго под ваш запрос.",
        img: "/process/2step.svg",
        bgColor: "#FAFCFF",
        numColor: "#E5E7EB"
    },
    {
        id:3,
        number: "03",
        title: "Проверка и диагностика",
        description: "Проверяем авто на юридическую чистоту, угон, ограничения. Проводим профессиональную диагностику состояния.",
        img: "/process/3step.svg",
        bgColor: "#ECF0F8",
        numColor: "#FFFFFF"
    },
    {
        id:4,
        number: "04",
        title: "Заключение договора",
        description: "Подписываем договор оказания услуг, фиксируем стоимость и сроки. Вносите предоплату.",
        img: "/process/4step.svg",
        bgColor: "#D9E0ED",
        numColor: "#fff"
    },
    {
        id:5,
        number: "05",
        title: "Выкуп авто",
        description: "Выкупаем автомобиль, оформляем документы. Готовим полный пакет для экспорта.",
        img: "/process/5step.svg",
        bgColor: "#fff",
        numColor: "#E5E7EB"
    },
    {
        id:6,
        number: "06",
        title: "Экспорт из Казахстана",
        description: "Подаем экспортную декларацию, снимаем авто с учета (при необходимости). Оформляем вывоз ТС.",
        img: "/process/6step.svg",
        bgColor: "#FAFCFF",
        numColor: "#E5E7EB"
    },
    {
        id:7,
        number: "07",
        title: "Доставка",
        description: "Организуем отправку автовозом или ЖД транспортом в ваш город (РФ, Узбекистан, Кыргызстан и другие страны).",
        img: "/process/7step.svg",
        bgColor: "#ECF0F8",
        numColor: "#FFFFFF"
    },
    {
        id:8,
        number: "08",
        title: "Передача и поддержка",
        description: "Вы получаете авто. Помогаем с постановкой на учет и отвечаем на вопросы.",
        img: "/process/8step.svg",
        bgColor: "#D9E0ED",
        numColor: "#fff"
    }
]