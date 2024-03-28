
import React, { Suspense } from 'react'
//import GitHubReposList from "@/app/client-side/t"

const ServerSide = async () => {
    return (

        <main className='w-4/5 h-screen flex flex-col p-10  overflow-hidden items-center'>
            <h1 className='font-bold text-3xl'>Página dinâmica SSR</h1>
            <h2 className='font-semibold text-xl mt-4'>Repositórios</h2>
            <h3 className='mt-4'>Streaming parcial de dados via componente</h3>

            <div className='w-[500px] mt-10 flex flex-col gap-10 overflow-y-scroll'>
                <Suspense fallback={<Skeleton />}>
                    <Listrepos />
                </Suspense>
            </div>
            <h2>client compoentes</h2>

        </main>
    )
}
export default ServerSide

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
        </>
    )
}

