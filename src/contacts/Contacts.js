import React, {useState} from 'react'
import "./Contacts.css";
import emailjs from 'emailjs-com';
import Popup from './popup/Popup';


export default function Contacts() {

    const [modalActive, setModalActive] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        
      let tempParams = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email:document.getElementById("email").value
    };

    if((tempParams.name==="")&&(tempParams.phone==="")&&(tempParams.email==="")){
        setModalActive(false);
        modalActive(false);
    }

    
        emailjs.sendForm('service_n34417o', 'template_rlabkwn', e.target, 'user_kf0cErehZ5YgtvrOt0DzP')
          .then((result) => {
              console.log(result.text);
            
             
          }, (error) => {
              console.log(error.text);
            
          });
      }

   
    return (
        <div className="Form_wrapper">
            <div>
                <div className="Form_header">
                    <p>Мы проконсультируем вас</p>
                </div>
                <div>
                    <p>Если у вас есть вопросы о формате или вы не знаете что выбрать, оставьте свой номер: мы позвоним, чтобы ответить на все ваши вопросы.</p>
                </div>
                <div className="Forms">
                    <form onSubmit={sendEmail}>
                        <div>
                            <input 
                            className={"input"}
                            placeholder={"Ваше имя"} 
                            name={"name"}
                            id = {"name"}
                            required
                            /> 
                        </div>
                        <div>
                            <input 
                            type={"tel"}
                            placeholder={"Телефон"}
                            name={"phone"}
                            className={"input"}
                            id={"phone"}
                            required
                            />    
                        </div>
                        <div>
                            <input 
                            type={"email"}
                            placeholder={"Электронная почта"}
                            name={"email"}
                            className={"input"}
                            id={"email"}
                            required
                            />
                        </div>
                        <div>
                            <button className={"open_btn"}
                            onClick={()=>setModalActive(true)}
                            type={"submit"}
                            >ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>
                        </div>
                    </form>
                </div>
                <div className="Contacts_footer">Нажимая кнопку "Заказать консультацию" вы соглашаетесь с условиями договора-оферты и политикой конфиденциальности</div>
            </div>
            <Popup active = {modalActive} setActive = {setModalActive}/>
        </div>
    
    )
}
