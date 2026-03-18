import styles from "./Form.module.css";
import { useState } from "react";

export default function Form(){
    const [form, setForm] = useState({
        name:"",
        phone:"",
        model:""
    })
    const [showNotification, setShowNotification] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleNameChange(e){
        const value = e.target.value
        const onlyLetters = value.replace(/[^а-яА-Яa-zA-Z]/g, "")
        setForm(prev=>({...prev, name:onlyLetters}))
    }

    function handlePhoneChange(e){
        const value = e.target.value
        const onlyNumbers = value.replace(/[^\d]/g, "")
        setForm(prev=>({...prev, phone:onlyNumbers}))
    }

    function handleModelChange(e){
        setForm(prev=>({...prev, model:e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitting(true)
        
        console.log(form)
        
        setShowNotification(true)
        
        setForm({
            name:"",
            phone:"",
            model:""
        })
        
        setIsSubmitting(false)
        
        setTimeout(() => {
            setShowNotification(false)
        }, 3000)
    }

    return(
        <section id="form" className={styles.form}>
            <div className={styles.text}>
                <h2>Нужна помощь?</h2>
                <p>Оставьте заявку, и менеджер подготовит детальный расчет стоимости интересующего вас автомобиля с учетом текущего курса валют и таможенных ставок.</p>
                <form className={styles.form_form} onSubmit={handleSubmit}> 
                    <div className={styles.row}>
                        <input 
                            className={styles.column} 
                            type="text" 
                            placeholder="Ваше имя" 
                            value={form.name} 
                            onChange={handleNameChange} 
                            required
                        />
                        <input 
                            className={styles.column} 
                            type="text" 
                            placeholder="Номер телефона" 
                            value={form.phone} 
                            onChange={handlePhoneChange} 
                            required
                        />
                    </div>
                    <input 
                        type="text" 
                        className={styles.column} 
                        placeholder="Модель, которая Вас интересует" 
                        value={form.model} 
                        onChange={handleModelChange} 
                        required
                    />
                    <button 
                        className={styles.btn} 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Отправка..." : "Получить консультацию"}
                    </button>
                </form>
            </div>
            
            {showNotification && (
                <div className={styles.notification}>
                     Спасибо! В течение 15 минут Вам поступит звонок!
                </div>
            )}
        </section>
    )
}