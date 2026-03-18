import styles from "./Cars.module.css"

export default function Cars(){
    return (
        <section className={styles.cars} id="avto">
            <div className={styles.container}>
            <h2>Популярные направления импорта</h2>
            <ul className={styles.carList}>
            {carList.map((car) => (
                <li className={styles.car_card} key={car.id}>
                    <img src={car.img} className={styles.car_img} alt={car.model} />
                    <div className={styles.car_info}>
                        <div className={styles.info_title}>
                            <p>{car.model}</p>
                            <span className={styles.title_details}> {car.type} • {car.year}</span>
                        </div>
                        <div className={styles.info_characteristics}>
                            <dl>
                                <dt>Двигатель</dt> <dd>{car.engine}</dd>
                            </dl>
                            <dl> 
                                <dt>Пробег</dt> <dd>{car.mileage}</dd>
                            </dl>
                            <dl> 
                                <dt>Привод</dt> <dd>{car.drive}</dd>
                            </dl>
                        </div>
                        <div className={styles.info_price}>
                            <div className={styles.price}>
                                <p>Цена под ключ</p>
                                <span>{car.price}</span>
                            </div>
                            <a href={`/cars/${car.id}`} className={styles.btn}>Подробнее</a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </div>
        </section>
        
        
    )
}

export const carList = [
    {
    id: 1,
    model: 'BMW X2, II (U10)',
    type: "Кроссовер",
    year: 2020,
    engine: "2.0 LPI (146 л.с.)",
    mileage: "42 500 км",
    drive: "Полный (4WD)",
    img: "/cars/bmw_u10.webp",
    price: "7 300 000 ₽",
    img1: "/cars/bmw_slider/bmw1.webp",
    img2: "/cars/bmw_slider/bmw2.webp",
    img3: "/cars/bmw_slider/bmw3.webp",
    img4: "/cars/bmw_slider/bmw4.webp"
  },
  {
    id: 2,
    model: "Toyota Camry, IX (XV80)",
    type: "Седан",
    year: 2021,
    engine: "2.0 (173 л.с.)",
    mileage: "35 000 км",
    drive: "Передний",
    img: "/cars/Toyota_Camry_IX.webp",
    price: "4 200 000 ₽",
    img1: "/cars/toyota_slider/toyota1.webp",
    img2: "/cars/toyota_slider/toyota2.webp",
    img3: "/cars/toyota_slider/toyota3.webp",
    img4: "/cars/toyota_slider/toyota4.webp"
  },
  {
    id: 3, 
    model: "Porsche Macan I",
    type:"Внедорожник",
    year: 2022,
    engine: "2.9 (380 л.с.)",
    mileage: "50 км",
    drive: "Полный",
    img: "/cars/Porshe_Macan.webp",
    price: "8 500 000 ₽",
    img1: "/cars/porshe_slider/porshe1.webp",
    img2: "/cars/porshe_slider/porshe2.webp",
    img3: "/cars/porshe_slider/porshe3.webp",
    img4: "/cars/porshe_slider/porshe4.webp"
  }
]