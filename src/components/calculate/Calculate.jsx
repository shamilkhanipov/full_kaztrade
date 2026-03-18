import styles from "./Calculate.module.css"
import { useState } from "react";

export default function Calculate(){
    const [showResult, setShowResult] = useState(false)
    const [form,setForm] = useState({
        price:"",
        type:"Sedan",
        volume:"to1500",
        assembly:false
    })
    const [result,setResult] = useState(null)

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
    }

    function formatNumber(value) {
        if (!value) return ""
        const number = value.replace(/\s/g, "")
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    function handlePriceChange(e) {
        const input = e.target.value
        const onlyNumbers = input.replace(/[^\d]/g, "")
        setForm(prev => ({
            ...prev,
            price: onlyNumbers
        }))
    }

    function handleChange(e){
        const {name,value,type,checked} = e.target
        setForm(prev=>({
            ...prev,
            [name]:type==="checkbox"?checked:value
        }))
    }

    function handleCalculate (){
        const price = Number(form.price)
        
        const auction = settings.auction[form.type]
        const logistic = settings.logistic[form.type]
        const customs = settings.customs[form.volume][form.type]
        
        let commission = price * settings.commissionPercent
        if (commission < settings.minCommission) {
            commission = settings.minCommission
        }
        
        const assembly = form.assembly ? settings.assembly : 0
        const total = price + auction + logistic + customs + commission + assembly
        
        setResult({
            price,
            auction,
            logistic,
            customs,
            commission: Math.round(commission),
            assembly,
            total
        })
        setShowResult(true)
    }

    return(
        <section id="calculate" className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2>Калькулятор ввоза</h2>
                        <p className={styles.info_desc}>Оцените предварительную стоимость ввоза автомобиля
                        в режиме конструктора, включая все ключевые
                        расходы: от аукциона до сборки.</p>
                        <ul className={styles.list_tutorial}>
                            {calTutoroial.map((step)=>(
                                <li key={step.id}>
                                    <p className={styles.title}>{step.title}</p>
                                    <p className={styles.desc}>{step.desc}</p>
                                </li>
                            ))}
                        </ul>
                        <p className={styles.dop}>* Расчет является предварительным и может меняться в зависимости
        от текущего курса валют.</p>
                    </div>
                    <div className={styles.calculate_card}>
                        <div className={styles.row}>
                            <fieldset className={styles.column}>
                                <label className={styles.label_card} htmlFor="price">Стоимость автомобиля (₽)</label>
                                <input 
                                    className={styles.input_card} 
                                    id="price" 
                                    name="price" 
                                    type="text" 
                                    placeholder="Например: 2 000 000" 
                                    value={formatNumber(form.price)} 
                                    onChange={handlePriceChange}
                                />
                            </fieldset>
                            <fieldset className={styles.column}>
                                <label className={styles.label_card} htmlFor="type">Тип кузова</label>
                                <select className={styles.input_card} name="type" id="type" value={form.type} onChange={handleChange}>
                                    <option value="Sedan">Седан, хэтчбек, универсал</option>
                                    <option value="Krossover">Кроссовер</option>
                                    <option value="Bus">Микроавтобус</option>
                                </select>
                            </fieldset>
                        </div>
                        <div className={styles.row}>
                            <fieldset className={styles.column}>
                                <label className={styles.label_card} htmlFor="volume">Объем двигателя</label>
                                <select className={styles.input_card} id="volume" name="volume" value={form.volume} onChange={handleChange}>
                                    <option value="to1500">до 1500 см³</option>
                                    <option value="from1500_to2000">1500 см³ - 2000 см³</option>
                                    <option value="from2500_to3000">2000 см³ - 3000 см³</option>
                                    <option value="from3000_to">от 3000 см³</option>
                                </select>
                            </fieldset>
                            <fieldset className={styles.column}>
                                <div className={styles.check}>
                                    <input className={styles.check_custom} type="checkbox" id="check" name="assembly" checked={form.assembly} onChange={handleChange}/>
                                    <label className={`${styles.label_card} ${styles.checkbox_label}`} htmlFor="check">Включить стоимость сборки</label>
                                </div>
                            </fieldset>
                        </div>
                        <button 
                            onClick={handleCalculate} 
                            disabled={!form.price || Number(form.price) <= 0}
                        >
                            Рассчитать стоимость
                        </button>
                        {showResult && result && Number(form.price) > 0 && (
                            <div className={styles.calculate_output}>
                                <h3>Из чего складывается стоимость</h3>
                                <div className={styles.calculate_output__info}>
                                    <dl>
                                        <dt>Стоимость автомобиля</dt>
                                        <dd>{result.price.toLocaleString()} ₽</dd>
                                    </dl>
                                    <dl>
                                        <dt>Аукционный сбор и расходы: </dt>
                                        <dd>{result.auction.toLocaleString()} ₽</dd>
                                    </dl>
                                    <dl>
                                        <dt>Логистика:</dt>
                                        <dd>{result.logistic.toLocaleString()} ₽</dd>
                                    </dl>
                                    <dl>
                                        <dt>Таможенное оформление:</dt>
                                        <dd>{result.customs.toLocaleString()} ₽</dd>
                                    </dl>
                                    <dl>
                                        <dt>Комиссия компании: </dt>
                                        <dd>{result.commission.toLocaleString()} ₽</dd>
                                    </dl>
                                    {result.assembly>0 && <dl>
                                        <dt>Сборка:</dt>
                                        <dd> {result.assembly.toLocaleString()} ₽</dd>
                                    </dl>}

                                    <div className={styles.total_price}>
                                        <dl>
                                            <dt>Итоговая стоимость под ключ: </dt>
                                            <dd>{result.total.toLocaleString()} ₽</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

const calTutoroial =[
    {
        id:1,
        title: "Введите стоимость автомобиля",
        desc: "Укажите цену покупки на аукционе (или желаемую)",
    },
    {
        id:2,
        title: "Укажите параметры авто",
        desc: "Тип кузова и необходимость сборки",
    },
    {
        id:3,
        title: "Получите расчет",
        desc: "Полная детализация расходов «под ключ»",
    }
]