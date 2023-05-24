import { AppProps } from 'next/app'
import React from 'react'
import RootLayout from '../app/layout'
import '../app/globals.css'

const _app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
        <Component {...pageProps} />
    </div>
  )
}

export default _app