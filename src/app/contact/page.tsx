'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Send, Mail, Instagram } from 'lucide-react';
import styles from './page.module.css';

const contactMethods = [
    { icon: Send, label: "Telegram", value: "@tpcbkk", href: "https://t.me/tpcbkk" },
    { icon: Phone, label: "WhatsApp", value: "+66644390939", href: "https://wa.me/66644390939" },
    { icon: Instagram, label: "Instagram", value: "@tpcbkk", href: "https://instagram.com/tpcbkk" },
    { icon: Mail, label: "Email", value: "info@titanpokerbangkok.com", href: "mailto:info@titanpokerbangkok.com" },
];

export default function ContactPage() {
    return (
        <div className={styles.page}>
            {/* Banner */}
            <section className={styles.pageBanner}>
                <Image
                    src="/images/banner_contact.jpg"
                    alt="Contact Titan Poker"
                    fill
                    priority
                    style={{ objectFit: 'cover', opacity: 0.2 }}
                />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.bannerTitle}
                >
                    Contact <span className="text-gradient-gold">Us</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.bannerSubtitle}
                >
                    Get in touch with Titan Poker Club
                </motion.p>
            </section>

            {/* Contact Cards */}
            <section className={styles.contentSection}>
                <div className={styles.contactGrid}>
                    {contactMethods.map((method, i) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.contactCard}
                        >
                            <div className={styles.contactIcon}>
                                <method.icon size={24} />
                            </div>
                            <h3>{method.label}</h3>
                            <p>{method.value}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Facebook & Location */}
                <div className={styles.extraInfo}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.locationCard}
                    >
                        <div className={styles.locationIcon}>
                            <MapPin size={28} />
                        </div>
                        <h3>Our Location</h3>
                        <p>Bangkok, Thailand</p>
                        <p className={styles.locationNote}>For exact venue location, please contact us via Telegram for directions.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.locationCard}
                    >
                        <div className={styles.locationIcon}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </div>
                        <h3>Facebook</h3>
                        <p>Titan Poker Club Bangkok</p>
                        <a href="https://facebook.com/titanpokerclub" target="_blank" rel="noopener noreferrer" className={styles.fbLink}>
                            Visit our Facebook page →
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Operating Info */}
            <section className={styles.contentSection}>
                <div className={styles.hoursCard}>
                    <h2>🕐 Operating Hours</h2>
                    <p className={styles.hoursText}>14:00 PM — 05:00 AM</p>
                    <p className={styles.hoursSub}>Seven Days a Week</p>
                </div>
            </section>
        </div>
    );
}
