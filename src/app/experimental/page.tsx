/* 
import React, { Suspense } from 'react'

const Experimental = async () => {
    const getUser = async () => {
        const response = await fetch(`https://api.github.com/users/JhonItalo`);
        const data = await response.json();
        return data
    }

    const data = await getUser()
    return (

        <main className='w-4/5 h-screen flex flex-col p-10 overflow-hidden items-center'>
            <h1 className='font-bold text-3xl'>Página Experimental</h1>
            <h2 className='font-semibold text-xl mt-4'>Estática com dinâmica</h2>

            <div className='w-full flex p-4 justify-center gap-20 border'>
                <div>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-semibold text-xl'>Dados buscados estáticamente</h3>
                        <img className='w-[300px] h-[300px] mt-6' src={data.avatar_url} alt='user' />
                        <p className='w-full p-4 border mt-4 border-black text-center'>{data.name}</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold text-xl'>Dados buscados dinamicamente com streaming</h3>
                    <div className='w-[450px] h-[360px] mt-6 flex flex-col gap-4 overflow-y-scroll'>
                        <Suspense fallback={<Skeleton />}>
                            <Listrepos />
                        </Suspense>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default Experimental

const Listrepos = async () => {

    const getrepos = async () => {
        //simulando busca lenta de dados
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const response = await fetch(`https://api.github.com/users/JhonItalo/repos`, {
            cache: 'no-store'
        });
        const data = await response.json();
        return data
    }

    const data = await getrepos()

    return (<>
        {data && data.map((item: any) => (
            <p className='p-4 border border-black' key={item.id}>{item.name}</p>
        ))}
    </>)

}

const Skeleton = () => {
    return (
        <>
            <p className='p-4 border border-black'>Loading</p>
            <p className='p-4 border border-black'>Loading</p>
            <p className='p-4 border border-black'>Loading</p>
            <p className='p-4 border border-black'>Loading</p>
            <p className='p-4 border border-black'>Loading</p>
        </>
    )
}

 */

import React from 'react'

const page = () => {
    return (
        <div>page</div>
    )
}

export default page
