import Link from 'next/link';
import { Phone, Send, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/affiliations', label: 'Affiliations & Recognition' },
    { href: '/tournaments', label: 'Tournaments' },
    { href: '/rankings', label: 'TPC Poker Rankings' },
    { href: '/games-schedule', label: 'Games & Schedule' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                {/* Logo & Description */}
                <div className={styles.column}>
                    <div className={styles.footerLogo}>
                        <div className={styles.logoIcon}>
                            <span className={styles.logoCrown}>♛</span>
                            <span className={styles.logoText}>TPC</span>
                        </div>
                        <span className={styles.logoFull}>TITAN <span className={styles.highlight}>POKER</span> CLUB</span>
                    </div>
                    <p className={styles.footerDesc}>
                        Welcome to Titan Poker Club, the premier destination for poker enthusiasts in the heart of Bangkok.
                        Our club offers an unmatched poker experience, blending the thrill of the game with the elegance of
                        a world-class venue.
                    </p>
                </div>

                {/* Quick Links */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Quick Links</h3>
                    <ul className={styles.linkList}>
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>CONTACT US</h3>
                    <div className={styles.contactList}>
                        <a href="https://wa.me/66613511423" target="_blank" rel="noopener noreferrer" className={styles.contactRow}>
                            <Phone size={16} className={styles.contactIcon} />
                            <span>+66613511423</span>
                        </a>
                        <a href="https://t.me/tpcbkk" target="_blank" rel="noopener noreferrer" className={styles.contactRow}>
                            <Send size={16} className={styles.contactIcon} />
                            <span>For reservations please contact Telegram: @tpcbkk</span>
                        </a>
                        <a href="mailto:info@titanpokerbangkok.com" className={styles.contactRow}>
                            <Mail size={16} className={styles.contactIcon} />
                            <span>info@titanpokerbangkok.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <p>© {new Date().getFullYear()} Titan Poker Club Bangkok. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
