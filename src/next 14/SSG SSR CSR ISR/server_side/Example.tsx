import React from 'react'
// @ts-ignore
import { unstable_noStore as noStore } from 'next/cache';

//Faça isso
export const dynamic = "force-dynamic" 
//ou
const ServerSide = async () => {
  // remover o cache
  const users = async () => {
    const response = await fetch("https://api.github.com/users/JhonItalo", {
      cache: 'no-store'
    })
    const user = await response.json()
    return user
  }
  //ou
  //Function noStore()
  const users1 = async () => {
    const response = await fetch("https://api.github.com/users/JhonItalo")
    const user = await response.json()
    // @ts-ignore
    noStore()
    return user
  }
  
  const user = users()

  return (
    <>
      <div className='bg-gray-800 text-red-100 '>Server Side rend</div>
      <p>{JSON.stringify(user)}</p>
    </>

  )
}

export default ServerSide