import ApolloProviderLayout from '@src/components/ApolloProviderLayout/ApolloProviderLayout';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "김예찬's Blog",
  description: '함께 일하는 개발자 김예찬입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ApolloProviderLayout>
          <Suspense>{children}</Suspense>
        </ApolloProviderLayout>
      </body>
    </html>
  );
}
