import { useRouter } from "next/router";
import { carList } from "../../components/Cars/Cars";
import Head from "next/head";
import Header from "@/components/header/Header";
import styles from "./Carpage.module.css"
import Footer from "@/components/footer/Footer";
import { useState } from "react";

export default function CarPage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  
  const router = useRouter();
  const { id } = router.query;

  const settings = {
    auction: {
      'Sedan': 150000,
      'Krossover': 200000,
      'Bus': 250000
    },
    logistic: {
      'Sedan': 220000,
      'Krossover': 250000,
      'Bus': 280000
    },
    customs: {
      'to1500': {
        'Sedan': 150000,
        'Krossover': 180000,
        'Bus': 200000
      },
      'from1500_to2000': {
        'Sedan': 250000,
        'Krossover': 280000,
        'Bus': 300000
      },
      'from2500_to3000': {
        'Sedan': 400000,
        'Krossover': 450000,
        'Bus': 500000
      },
      'from3000_to': {
        'Sedan': 600000,
        'Krossover': 650000,
        'Bus': 700000
      }
    },
    assembly: 80000,
    commissionPercent: 0.015,
    minCommission: 30000
  };

  const getCarType = (car) => {
    const type = car.type?.toLowerCase() || '';
    if (type.includes('седан') || type.includes('хэтчбек') || type.includes('универсал')) return 'Sedan';
    if (type.includes('кроссовер') || type.includes('внедорожник')) return 'Krossover';
    if (type.includes('микроавтобус') || type.includes('минивэн')) return 'Bus';
    return 'Sedan';
  };

  const getEngineVolume = (car) => {
    const engineStr = car.engine?.toLowerCase() || '';
    
    const match = engineStr.match(/(\d+(?:[.,]\d+)?)/);
    if (match) {
      const volume = parseFloat(match[1].replace(',', '.'));
      
      if (volume <= 1.5) return 'to1500';
      if (volume <= 2.0) return 'from1500_to2000';
      if (volume <= 3.0) return 'from2500_to3000';
      return 'from3000_to';
    }
    
    return 'from1500_to2000';
  };

  if (!router.isReady) {
    return <p>Загрузка...</p>;
  }

  const car = carList.find(car => car.id === Number(id));

  if (!car) {
    return <p>Машина не найдена</p>;
  }

  const photos = [car.img, car.img1, car.img2, car.img3, car.img4].filter(Boolean);

  const nextPhoto = () => {
    if (currentImg < photos.length - 1) {
      setCurrentImg(currentImg + 1);
    }
  };

  const prevPhoto = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
    }
  };

  function formatNumber(value) {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const extractPrice = (priceString) => {
    if (!priceString) return 0;
    const numbers = priceString.toString().replace(/[^\d]/g, '');
    return Number(numbers) || 0;
  };

  const handleCalculate = () => {
    const price = extractPrice(car.price);
    const carType = getCarType(car);
    const engineVolume = getEngineVolume(car);
    
    const auction = settings.auction[carType];
    const logistic = settings.logistic[carType];
    const customs = settings.customs[engineVolume][carType];
    
    let commission = price * settings.commissionPercent;
    if (commission < settings.minCommission) {
      commission = settings.minCommission;
    }
    
    const assembly = settings.assembly;
    const total = price + auction + logistic + customs + commission + assembly;
    
    setResult({
      price,
      auction,
      logistic,
      customs,
      commission: Math.round(commission),
      assembly,
      total
    });
    setShowResult(true);
  };

  return (
    <>
      <Head>
        <title>{car.model} - купить авто с пробегом | КазТрейд</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header/>
      <div className={styles.container}>
        <div className={styles.nav}>
          <a href="/">Главная  </a>
          <a href="" className={styles.active}>{car.model}</a>
        </div>
        <div className={styles.main_info}>
          <div className={styles.picture_info}>
            <div className={styles.slider}>
              <div className={styles.main_picture}>
                <img 
                  src={photos[currentImg]} 
                  alt={car.model} 
                  className={styles.main_img}
                />
                <button 
                  onClick={prevPhoto}
                  className={`${styles.slider_btn} ${styles.prev_btn}`}
                  disabled={currentImg === 0}
                >
                  ←
                </button>
                <button 
                  onClick={nextPhoto}
                  className={`${styles.slider_btn} ${styles.next_btn}`}
                  disabled={currentImg === photos.length - 1}
                >
                  →
                </button>
                <div className={styles.counter}>
                  {currentImg + 1} / {photos.length}
                </div>
              </div>

              <div className={styles.mini_photos}>
                {photos.map((photo, index) => (
                  <img 
                    key={index}
                    src={photo} 
                    alt={`${car.model} ${index + 1}`}
                    onClick={() => setCurrentImg(index)}
                    className={`${styles.mini_img} ${currentImg === index ? styles.active_mini : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.text_info}>
            <div className={styles.title_block}>
              <span className={styles.title}>{car.model}</span>
              <span className={styles.subtitle}>В наличии</span>
            </div>
            <div className={styles.price_block}>
              <p className={styles.price_title}> Цена в Казахстане</p>
              <p className={styles.price}>{car.price}</p>
              <span>Без учета таможенных сборов и доставки в РФ</span>
            </div>
            <div>
              <div className={styles.row}>
                <p>
                  <span>пробег</span>
                  {car.mileage}
                </p>
                <p>
                  <span>мощность</span>
                  {car.engine}
                </p>
              </div>
              <div className={styles.row}>
                <p>
                  <span>тип</span>
                  {car.type}
                </p>
                <p>
                  <span>Привод</span>
                  {car.drive}
                </p>
              </div>
            </div>
            <button onClick={handleCalculate}>
              Рассчитать стоимость
            </button>
            
            {showResult && result && (
              <div className={styles.calculate_output}>
                <div className={styles.calculate_output__info}>
                  <dl>
                    <dt>Стоимость автомобиля</dt>
                    <dd>{formatNumber(result.price)} ₽</dd>
                  </dl>
                  <dl>
                    <dt>Аукционный сбор и расходы:</dt>              
                    <dd>{formatNumber(result.auction)} ₽</dd> 
                  </dl>                        
                  <dl>
                    <dt>Логистика:</dt>
                    <dd>{formatNumber(result.logistic)} ₽</dd>
                  </dl>
                  <dl>
                    <dt>Таможенное оформление:</dt>
                    <dd>{formatNumber(result.customs)} ₽</dd>
                  </dl>
                  <dl>
                    <dt>Комиссия компании:</dt>
                    <dd>{formatNumber(result.commission)} ₽</dd>
                  </dl>
                  <dl>
                    <dt>Сборка:</dt>
                    <dd>{formatNumber(result.assembly)} ₽</dd>
                  </dl>

                  <div className={styles.total_price}>
                    <dl>
                      <dt>Итоговая стоимость под ключ:</dt>
                      <dd>{formatNumber(result.total)} ₽</dd>
                    </dl>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
     </div>
     <Footer/>
    </>
  );
}