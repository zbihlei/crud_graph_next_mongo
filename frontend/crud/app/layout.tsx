"use client"
import { Space_Mono } from 'next/font/google';
import './globals.css'
import { ApolloProvider } from '@apollo/client';
import client from  '../apolloClient';

const sm = Space_Mono({ subsets: ['latin'] , weight:'400' });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <ApolloProvider client={client}>
      <body className={sm.className}>{children}</body>
    </ApolloProvider>
    </html>
  )
}
