import React, { Suspense } from 'react'

///A nivel de página, crie um novo arquivo chamado loading.tsx:
//serve side dynamic
const Loading = () => {
  //serve side dynamic
  return (
    <div>Skeleton Home page</div>
  )
}

/// A nivel de componente use react suspense
//serve side dynamic
export default function Header() {

  const users = async () => {
    const response = await fetch("https://api.github.com/users/JhonItalo", {
      cache: 'no-store'
    })
    const user = await response.json()
    return user
  }
  const user = users();


  return (
    <>
      <h1>página carregada</h1>
      <p>abaixo componente carregado via streaming</p>
      <Suspense fallback={<p>SKELETON HEADER</p>}>
        <p>{JSON.stringify(user)}</p>
        <p>straming</p>
      </Suspense>
    </>
  )
}

