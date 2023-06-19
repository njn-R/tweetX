"use client"

import type { AppProps } from 'next/app'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

import Layout from './components/Layout'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'


export default function Home() {

  return (
    <>
      <SessionProvider>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <Layout>
          <Header label='Home' />
        </Layout>
      </SessionProvider>
    </>
  )
}
