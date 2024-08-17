import React from 'react'

const Headr = () => {
  return (
    <div className='py-10 px-20 flex items-center justify-between' >
      <h1 className='flex items-center  '> <img src="/src/assets/logo.png" alt="" />СтройКонтроль</h1>
      <ul className='flex gap-4 items-center'>
        <p className='text-blue-500 font-[700]'>Главная</p>
        <p>О нас</p>
        <p>Продукция</p>
        <p>Процесс</p>
        <p>Надёжность</p>
        <p>Клиенты</p>
        <p>Связаться с нами</p>
        <p className='px-[20px] bg-slate-600 text-white py-2 rounded-[10px]'>Заказать демо</p>
      </ul>
    </div>
  )
}

export default Headr
