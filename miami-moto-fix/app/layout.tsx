import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://miamimotofix.com'),
  title: {
    default: 'Miami Moto Fix - Mobile Motorcycle Repair Service | 24/7 Emergency',
    template: '%s | Miami Moto Fix',
  },
  description:
    'Professional mobile motorcycle repair in Miami, FL. We come to you! 24/7 emergency service, all motorcycle types. Call (786) 470-6864 for same-day service.',
  keywords: [
    'mobile motorcycle repair Miami',
    'motorcycle mechanic Miami',
    'emergency motorcycle service',
    'mobile bike repair',
    'motorcycle repair near me',
    'Harley Davidson repair Miami',
    'motorcycle maintenance Miami',
    '24/7 motorcycle repair',
    'Miami Moto Fix',
    'motorcycle roadside assistance',
  ],
  authors: [{ name: 'Miami Moto Fix' }],
  creator: 'Miami Moto Fix',
  publisher: 'Miami Moto Fix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Miami Moto Fix - Mobile Motorcycle Repair Service',
    description: 'Professional mobile motorcycle repair in Miami. We come to you! 24/7 emergency service available.',
    url: 'https://miamimotofix.com',
    siteName: 'Miami Moto Fix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Miami Moto Fix - Mobile Motorcycle Repair',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miami Moto Fix - Mobile Motorcycle Repair',
    description: 'Professional mobile motorcycle repair in Miami. We come to you!',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://miamimotofix.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Miami Moto Fix',
              description: 'Professional mobile motorcycle repair service in Miami, FL',
              url: 'https://miamimotofix.com',
              telephone: '+17864706864',
              email: 'info@miamimotofix.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '12685 NW 11th St',
                addressLocality: 'Miami',
                addressRegion: 'FL',
                postalCode: '33182',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '25.7617',
                longitude: '-80.1918',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              priceRange: '$$',
              image: 'https://miamimotofix.com/logo.jpg',
              sameAs: ['https://www.facebook.com/miamimotofix', 'https://www.instagram.com/miamimotofix'],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
