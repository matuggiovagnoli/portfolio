import React from 'react'
import { useTranslation } from 'react-i18next';
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
    const { t } = useTranslation();

  return (
    <div className='w-full h-fit flex flex-row max-sm:flex-col items-center justify-evenly bg-gray-100 border-t-2 border-black py-5 max-sm:gap-5 px-3'>
        <div className='xl:w-96 md:w-64 flex flex-col gap-2'>
            <p className='xl:text-3xl md:text-xl max-sm:text-2xl font-extrabold '>{t('lets_talk')}</p>
            <a href='mailto:matiasgomez.dev@gmail.com'>
                <button className='flex flex-row items-center justify-center bg-black text-white rounded-md p-2 gap-1'>
                    {t('email_me')}
                    <IoIosSend />
                </button>
            </a>
        </div>
        <div>
            <div className='flex flex-row items-center gap-2'>
                <p className='xl:text-xl md:text-base'>{t('follow')}</p>
                <a href='https://github.com/matuggiovagnoli'>
                    <RiGithubLine className='w-9 h-9 hover:text-white hover:bg-black rounded-3xl'/>
                </a>
                <a href='https://www.linkedin.com/in/matias-daniel-g%C3%B3mez-giovagnoli/'>
                    <FaLinkedinIn className='w-9 h-9 hover:text-white hover:bg-blue-700 rounded-3xl'/>
                </a>
            </div>
        </div>
        <div>
            <p className='max-sm:text-xs md:text-sm'>{t('thanks')}</p>
            <p className='max-sm:text-xs md:text-sm'>{t('created')}</p>
        </div>
    </div>
  )
}

export default Footer