
import React from 'react'

const Static = async () => {

    /*    const getrepos = async () => {
           const response = await fetch(`https://api.github.com/users/JhonItalo/repos`);
           const data = await response.json();
           return data
       }
       const data = await getrepos()
    */
    let data: null | number[] = [1, 2]
    return (

        <main className='w-4/5 h-screen flex flex-col p-10  overflow-hidden items-center'>

            <h1 className='font-bold text-3xl'>Página estatica</h1>
            <h2 className='font-semibold text-xl mt-4'>Repositórios</h2>

            {data && (
                <div className='mt-14 flex flex-col gap-10 overflow-y-scroll'>
                    {data.map((item: any) => (
                        <p className='p-4 border border-black ' key={item.id}>{item.name}</p>
                    ))}
                </div>
            )}

        </main>





    )
}

export default Static