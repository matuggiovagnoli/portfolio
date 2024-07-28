import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import men1 from '../media/Men_talking_1.svg';
import men2 from '../media/Men_talking_2.svg';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const newErrors = {};
    if (!form.name.value.trim()) {
      newErrors.name = t('name_required');
    }
    if (!form.email.value.trim()) {
      newErrors.email = t('email_required');
    } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
      newErrors.email = t('email_invalid');
    }
    if (!form.subject.value.trim()) {
      newErrors.subject = t('subject_required');
    }
    if (!form.message.value.trim()) {
      newErrors.message = t('message_required');
    }
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = form.current;
    const newErrors = validateForm(formElement);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    emailjs
      .sendForm('service_rfmuflh', 'template_tkbcwxw', formElement, 'XStE7U5RpCfrWfNBD')
      .then(
        (response) => {
          console.log('Email was sent successfully!', response.status, response.text);
          toast.success(
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {t('email_sent')}
            </div>
          );
        },
        (error) => {
          console.log('Failed to send email.', error.text);
          toast.error(
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              {t('email_error')}
            </div>
          );
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-t from-blue-400 to-gray-100">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black z-30">{t('contact')}</h2>
      <img src={men1} alt='person_1' className='absolute 2xl:left-[450px] lg:left-[70px] md:left-0 max-sm:hidden w-[400px] h-[400px] animate-slide-in-left z-10' />
      <img src={men2} alt='person_2' className='absolute 2xl:right-[450px] lg:right-[70px] md:right-0 max-sm:hidden w-[400px] h-[400px] animate-slide-in-right z-10' />
      <form ref={form} onSubmit={sendEmail} className="bg-slate-200 p-4 rounded-lg shadow-md w-full max-w-md md:w-2/5 space-y-4 z-10">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 font-semibold mb-1">{t('name')}</label>
          <input type="text" id="name" name="name" autoComplete='off' className="w-full lg:h-10 p-2 border-b-2 border-black bg-transparent outline-none" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-700 font-semibold mb-1">{t('email')}</label>
          <input type="email" id="email" name="email" className="w-full lg:h-10 p-2 border-b-2 border-black bg-transparent outline-none" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm text-gray-700 font-semibold mb-1">{t('subject')}</label>
          <input type="text" id="subject" name="subject" autoComplete='off' className="w-full lg:h-10 p-2 border-b-2 border-black bg-transparent outline-none" />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-gray-700 font-semibold mb-1">{t('message')}</label>
          <textarea id="message" name="message" className="w-full lg:h-24 p-2 border-b-2 border-black bg-transparent outline-none"></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="w-full lg:w-auto sm:w-auto bg-black h-12 px-6 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white">{t('send')}</button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
