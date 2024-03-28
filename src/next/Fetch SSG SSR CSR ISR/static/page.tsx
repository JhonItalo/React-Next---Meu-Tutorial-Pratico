import React from 'react'

//Por padrão a fetch é estática e a page é criada no build
//Adicone o revalidade para a página ser atualizada
const Static = async () => {
  const response = await fetch("https://api.github.com/users/JhonItalo", {
    next: {
      revalidate: 60 * 60 * 24 //dia
    }
  })
  const user = await response.json()


  return (
    <>
      <div>pagina estatica</div>
      <p>{JSON.stringify(user)}</p>
    </>

  )
}


export default Static