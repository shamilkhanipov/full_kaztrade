import styles from "./Banner.module.css";

export default function Banner (){
    return (
        <section className={styles.banner}>
            <div className={`${styles.banner_info} ${styles.container}`}>
                <span>Лицензированный импорт с 2018 года</span>
                <h1>Автомобили из Казахстана без пробега</h1>
                <p>Проверенные автомобили из Казахстана: полное юридическое и таможенное сопровождение. <br /> Под ключ: от поиска на местных площадках до постановки на учет в РФ.</p>
                <div className={styles.banner_info_btn}>
                    <a href="#calculate" className={styles.price}>Рассчитать стоимость</a>
                    <a href="https://max.ru/id1650055457_gos" target="_blank" title="MAX" className={styles.support}>Связаться в max</a>
                </div>
            </div>
        </section>
    )
}   