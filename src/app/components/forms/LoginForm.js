'use client';

import React, { useEffect, useState } from 'react'
import { CardLogin, LoadingCard } from '../cards';

function LoginForm() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(isLoading){
            setTimeout(() => {
                setIsLoading(false);
            }, 5000);
        }
    },[isLoading]);
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500 w-screen'>
       {isLoading ? (
           <LoadingCard type={'login'} />
           ) : (
           <CardLogin />
       )}
    </div>
  )
}

export default LoginForm