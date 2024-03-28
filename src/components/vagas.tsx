import React from 'react'

export const Vagas = async () => {
    const response = await fetch("https://api.github.com/users/JhonItalo/repos")
    const user = await response.json()
    console.log(user[0].id, 'user')

  return (
    <div>Vagas {user[0].id} </div>
  )
}

export default Vagas