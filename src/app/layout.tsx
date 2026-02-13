import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Titan Poker Club Bangkok — Premier Poker Destination in Thailand',
    description: 'Experience the best live poker in Bangkok. Texas Hold\'em, PLO tournaments, cash games with professional dealers. Venues in Bangkok, Phuket, Pattaya & Hua Hin.',
    keywords: 'poker bangkok, titan poker club, texas holdem bangkok, PLO thailand, poker tournament bangkok',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <Header />
                <main style={{ paddingTop: '6.5rem' }}>
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
