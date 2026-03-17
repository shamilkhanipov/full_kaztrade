import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "@/assets/icons/logo_inverse.svg"
import max_footer from "@/assets/icons/max_footer.svg";
import wk_footer from "@/assets/icons/wk_footer.svg";


export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={`${styles.footer_nav} ${styles.container}`}>
                <div className={styles.footer_item}>
                   <Image className={styles.title} src={logo} alt="КазТрейд"/>
                   <p className={styles.about_text}>
                    Мы делаем покупку автомобиля из-за рубежа простой, безопасной и выгодной для каждого клиента.
                   </p>
                   <ul className={styles.about_social}>
                        <li><a href="https://max.ru/id1650055457_gos" target="_blank"><Image src={max_footer} alt="Мы в MAX"/></a></li>
                        <li><a href="https://vk.com/pedcoll_chelny" target="_blank"><Image src={wk_footer} alt="Мы в ВКонтакте"/></a></li>
                   </ul>
                </div>
                <ul className={styles.footer_item}>
                     <span className={styles.title}>УСЛУГИ</span>
                    <li><a href="#avto">Авто из Казахстана</a></li>
                    <li><a href="#calculate">Калькулятор ввоза</a></li>
                    <li><a href="">Видеобзор</a></li>
                </ul>
                <ul className={styles.footer_item}>
                    <span className={styles.title}>ИНФОРМАЦИЯ</span>
                    <li><a href="#process">Как мы работаем</a></li>
                    <li><a href="#FAQ">Вопросы и ответы (FAQ)</a></li>
                </ul>
                <ul className={styles.footer_item}>
                    <span className={styles.title}>Контакты</span>
                    <li>
                        <div className={styles.title_last}>
                            <span>+7 900 123 45 67</span>
                            Ежедневно, 09:00 — 20:00
                        </div>
                        
                    </li>
                    <li>
                        482300, г. Набережные Челны, <br />56 комплекс, 4
                    </li>
                    <li>
                        <a href="mailto:zunamischamil@gmail.com?body=Здравствуйте! Меня заинтересовала машина ">example@gmail.com</a>
                    </li>
                </ul>
            </div>
            <ul className={styles.dop_info}>
                <li>© 2018-2026 КазТрейд. Все права защищены. Не является публичной офертой.</li>
                <ul className={styles.read}>
                    <li><a href="">Политика конфиденциальности</a></li>
                    <li><a href="">Пользовательское соглашение</a></li>
                </ul>
            </ul>
        </div>
    )
}