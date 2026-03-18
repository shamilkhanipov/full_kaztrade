"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      
      <div className={styles.container}>
        <nav className={styles.main_nav}>
          <a href="/" className={styles.logo}>
            <Image src={logo} alt="КазТрейд"/>
          </a>
          <ul className={styles.main_site_nav}>
            <li><a href="#avto">Авто из Казахстана</a></li>
            <li><a href="#calculate">Калькулятор</a></li>
            <li><a href="#FAQ">FAQ</a></li>
          </ul>
          <div className={styles.main_user_nav}>
            <span className={styles.phone}>+7 900 123 45 67</span>
            <a href="#form" className={styles.main_user_nav__btn}>
              Оставить заявку
            </a>
          </div>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlay_active : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div className={`${styles.side_menu} ${menuOpen ? styles.side_menu_open : ""}`}>

        <button
          className={styles.close_btn}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <ul className={styles.mobile_nav}>
          <li><a href="#avto">Авто из Казахстана</a></li>
          <li><a href="#calculate">Калькулятор</a></li>
          <li><a href="#FAQ">FAQ</a></li>
        </ul>

        <div className={styles.mobile_user}>
          <span>+7 900 123 45 67</span>

          <a href="#form">
            Оставить заявку
          </a>
        </div>

      </div>

    </header>
  );
}