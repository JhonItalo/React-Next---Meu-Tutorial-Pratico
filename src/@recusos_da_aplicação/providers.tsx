'use client'
import React from 'react'

import ReactQueryProvider from '@/react/React_Query/ReactQueryProvider';

import NextAuthSessionProvider from './sessionProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (


    <NextAuthSessionProvider>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </NextAuthSessionProvider>



  )
}

export default Providers