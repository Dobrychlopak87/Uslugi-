import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Lokalne Usługi Gospodarcze',
  description: 'Harmonogram usług remontowych i porządkowych.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pl" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
