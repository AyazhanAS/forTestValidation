import React from 'react'
import "./Contacts.css";
import {Formik} from "formik";
import * as yup  from "yup"

export default function Contacts() {
    const validationSchema = yup.object().shape({
        name: yup.string().typeError("Должно быть строкой").required("Обязательно!"),
        phone: yup.number().typeError("Должно быть числом").required("Обязательно!"),
        email:yup.string().email("введите верный емайл").required("обязательно")
    })
    return (
        <div className="Form_wrapper">
            <Formik
            initialValues={{
                name: "",
                phone: "",
                email: ""
            }}
            validateOnBlur
            onSubmit={(values)=>{console.log(values)}}
            validationSchema = {validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty })=>(
                    <div>
                                    <div className="Form_header">

<p>Мы проконсультируем вас</p>

</div>

<div>
<p>Если у вас есть вопросы о формате или вы не знаете что выбрать, оставьте свой номер: мы позвоним, чтобы ответить на все ваши вопросы.</p>
</div>
<div className="Forms">
<form>
    <div>
        <input 
        className={"input"}
        placeholder={"Ваше имя"} 
        name={"name"}
        onChange={handleChange}
         onBlur={handleBlur}
         value={values.name}
        >
        
        </input>
       
    </div>
    {touched.name && errors.name && <p className={"error"}>{errors.name}</p>}
    <div>
        <input 
        placeholder={"Телефон"}
         name={"phone"}
         className={"input"}
       
         onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
         ></input>
        
    </div>
    {touched.phone && errors.phone && <p className={"error"}>{errors.phone}</p>}
    <div>
        <input 
         placeholder={"Электронная почта"}
         name={"email"}
         className={"input"}
       
         onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
         ></input>
       
    </div>
    {touched.email && errors.email && <p className={"error"}>{errors.email}</p>}
    
    <div>
        <button
        disabled={!isValid && !dirty}
        onClick={handleSubmit}
        type={"submit"}
        >ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>
    </div>
</form>
</div>
<div className="Contacts_footer">Нажимая кнопку "Заказать консультацию" вы соглашаетесь с условиями договора-оферты и политикой конфиденциальности</div>

                    </div>
                )}

            </Formik>

        </div>
    )
}
