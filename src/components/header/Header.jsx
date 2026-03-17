import styles from  "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";                                                                                                                                         

export default function Header (){
    return (
        <header className={styles.container}>
            <nav className={styles.main_nav}>
                <ul className={styles.main_site_nav}>
                    <li><a href="/"><Image  src={logo} alt="КазТрейд"/></a></li>
                    <li><a href="#avto">Авто из Казахстана</a></li>
                    <li><a href="#calculate">Калькулятор</a></li>
                    <li><a href="#FAQ">FAQ</a></li>
                </ul>
                <ul className={styles.main_user_nav}>
                    <li><span>+7 900 123 45 67</span></li>
                    <li><a href="#form" className={styles.main_user_nav__btn}>Оставить заявку</a></li>
                </ul>
            </nav>
        </header>
    )
}