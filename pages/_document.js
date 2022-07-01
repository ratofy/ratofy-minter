import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='h-full bg-gradient-to-r from-red-400 to-black-200'>
      <Head />
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
