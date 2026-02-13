'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Send, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/tournaments', label: 'Tournaments' },
    { href: '/games-schedule', label: 'Games & Schedule' },
    { href: '/affiliations', label: 'Affiliations & Recognition' },
    { href: '/rankings', label: 'TPC Poker Rankings' },
    { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className={styles.header}>
            {/* Top Contact Bar */}
            <div className={styles.topBar}>
                <div className={styles.topBarInner}>
                    <div className={styles.topLinks}>
                        <Link href="/contact#faq">FAQ</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/disclaimer">Disclaimer</Link>
                    </div>
                    <div className={styles.topContact}>
                        <a href="https://wa.me/66613511423" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                            <Phone size={14} />
                            <span>+66613511423</span>
                        </a>
                        <a href="https://t.me/tpcbkk" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                            <Send size={14} />
                            <span>For reservations please contact Telegram: @tpcbkk</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={styles.nav}>
                <div className={styles.navInner}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <span className={styles.logoCrown}>♛</span>
                            <span className={styles.logoText}>TPC</span>
                        </div>
                        <span className={styles.logoFull}>TITAN <span className={styles.highlight}>POKER</span> CLUB</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.navActions}>
                        <Link href="/contact" className={styles.joinBtn}>
                            JOIN NOW
                        </Link>
                        <button
                            className={styles.menuBtn}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className={styles.mobileJoinBtn} onClick={() => setMobileOpen(false)}>
                            JOIN NOW
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
