'use client'
import './globals.css'
import type { Metadata } from 'next'

import { ChakraProvider } from '@chakra-ui/react'

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <ChakraProvider>
        {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
