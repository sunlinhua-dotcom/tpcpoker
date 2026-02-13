'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Utensils, Car, Sparkles, Globe, Shield, CreditCard } from 'lucide-react';
import styles from './page.module.css';

const venues = [
    { city: "Bangkok", status: "Main Venue", img: "/images/venue_bangkok.jpg" },
    { city: "Phuket", status: "Partner Venue", img: "/images/venue_phuket.jpg" },
    { city: "Pattaya", status: "Partner Venue", img: "/images/venue_pattaya.jpg" },
    { city: "Hua Hin", status: "Partner Venue", img: "/images/venue_huahin.jpg" },
];

const incentives = [
    { icon: Car, title: "Complimentary Transport", desc: "Free pickup and drop-off service for all players" },
    { icon: CreditCard, title: "Flexible Payments", desc: "Cash, Cryptocurrency, credit cards, and electronic transfers accepted" },
    { icon: Sparkles, title: "In-house Spa", desc: "Relax and rejuvenate with our spa services between sessions" },
    { icon: Utensils, title: "Fine Dining", desc: "In-house catering featuring Thai and international cuisine" },
    { icon: Globe, title: "Multilingual Staff", desc: "Professionally trained staff fluent in multiple languages" },
    { icon: Shield, title: "International Standards", desc: "Safety and privacy are our top priorities" },
];

const stakes = [
    { blind: "2/5", min: "500 THB" },
    { blind: "10/20", min: "2,000 THB" },
    { blind: "25/50", min: "5,000 THB" },
    { blind: "100/200", min: "20,000 THB" },
];

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.pageBanner}>
                <Image
                    src="/images/banner_about.jpg"
                    alt="About Titan Poker Club"
                    fill
                    priority
                    style={{ objectFit: 'cover', opacity: 0.3 }}
                />
                <div className={styles.bannerOverlay} />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.bannerTitle}
                >
                    About <span className="text-gradient-gold">Titan Poker Club</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.bannerSubtitle}
                >
                    An International Standard Poker Experience
                </motion.p>
            </section>

            {/* About Description */}
            <section className={styles.contentSection}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.textBlock}
                >
                    <p>
                        <strong>Titan Poker Thailand</strong> is an international brand affiliated with
                        <strong> Titan Poker Inc UK</strong>, <strong>Pokerdiscover</strong>, and <strong>Gutshot Media Group</strong>.
                        We are committed to bringing you the finest poker experience in Southeast Asia.
                    </p>
                    <p>
                        Our state-of-the-art poker rooms feature professional-grade equipment, expert dealers, and an ambiance
                        that reflects the elegance of world-class gaming establishments. Whether you are a seasoned professional
                        or a casual player, Titan Poker Club delivers an unforgettable experience.
                    </p>
                    <p>
                        Safety and privacy are our top priorities. All our venues maintain the highest standards of security
                        and confidentiality, ensuring you can focus entirely on what matters most — the game.
                    </p>
                </motion.div>
            </section>

            {/* Venues */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Our <span className="text-gradient-gold">Venues</span>
                </h2>
                <div className={styles.venueGrid}>
                    {venues.map((venue, i) => (
                        <motion.div
                            key={venue.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.venueCard}
                        >
                            <div className={styles.venueImageWrapper}>
                                <Image src={venue.img} alt={venue.city} fill style={{ objectFit: 'cover' }} />
                                <div className={styles.venueImageOverlay} />
                            </div>
                            <div className={styles.venueInfo}>
                                <MapPin size={20} className={styles.venueIcon} />
                                <h3>{venue.city}</h3>
                                <span className={styles.venueStatus}>{venue.status}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Games Available */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Games <span className="text-gradient-gold">Available</span>
                </h2>
                <div className={styles.gamesList}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.gameItem}
                    >
                        <div className={styles.gameDot} />
                        <div>
                            <h3>Texas Hold&apos;em No Limit</h3>
                            <p>The world&apos;s most popular poker variant, available at all our venues with multiple stake levels.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.gameItem}
                    >
                        <div className={styles.gameDot} />
                        <div>
                            <h3>Pot Limit Omaha 5 Card</h3>
                            <p>An engaging variant that adds extra complexity and excitement with five hole cards.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Player Incentives */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Key Points & <span className="text-gradient-gold">Incentives</span> for Players
                </h2>
                <div className={styles.incentiveGrid}>
                    {incentives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={styles.incentiveCard}
                        >
                            <div className={styles.incentiveIcon}>
                                <item.icon size={22} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stakes / Blind Levels */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Blind <span className="text-gradient-gold">Levels</span>
                </h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Blind Level</th>
                                <th>Minimum Buy-in</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stakes.map((s) => (
                                <tr key={s.blind}>
                                    <td className={styles.tdHighlight}>{s.blind}</td>
                                    <td>{s.min}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
