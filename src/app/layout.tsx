import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aishwarya Portfolio | Data Science & Analytics',
  description:
    'Explore my portfolio showcasing expertise in machine learning, data analysis, geospatial intelligence, and AI solutions. MSc Data Science with 2+ years of experience at Deloitte.',
  keywords: [
    'Data Science',
    'Machine Learning',
    'Data Analysis',
    'Python',
    'SQL',
    'GIS',
    'Analytics',
    'Portfolio',
  ],
  authors: [{ name: 'Data Science Professional' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Aishwarya Portfolio | Data Science & Analytics',
    description: 'MSc Data Science | 2+ Years Experience | Deloitte | AI & Geospatial Analytics',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Data Science Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aishwarya Portfolio',
    description: 'Transforming data into insights through ML and analytics',
    creator: '@yourhandle',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='55%' font-size='70' text-anchor='middle' dominant-baseline='middle'>AU</text></svg>" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
