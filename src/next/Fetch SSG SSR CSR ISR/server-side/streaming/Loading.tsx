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
const Header = () => {
  return (
    <>
      <Suspense fallback={<p>SKELETON HEADER</p>}>
        <p>componente que sofrerá o streaming</p>
      </Suspense>
    </>
  )
}

export default Loading