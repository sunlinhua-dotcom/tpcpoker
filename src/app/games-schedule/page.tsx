'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const cashGames = [
    {
        table: "Table 1",
        time: "7:00 PM",
        game: "Texas Hold'em (NL)",
        stakes: "100/200",
        minBuyin: "20,000 THB",
        rake: "5% (Cap 1,500 THB)",
    },
    {
        table: "Table 2",
        time: "8:00 PM",
        game: "PLO 5 Card",
        stakes: "100/200",
        minBuyin: "20,000 THB",
        rake: "5% (Cap 1,500 THB)",
    },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function GamesSchedulePage() {
    return (
        <div className={styles.page}>
            {/* Banner */}
            <section className={styles.pageBanner}>
                <Image
                    src="/images/banner_schedule.jpg"
                    alt="Games & Schedule"
                    fill
                    priority
                    style={{ objectFit: 'cover', opacity: 0.25 }}
                />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.bannerTitle}
                >
                    Games & <span className="text-gradient-gold">Schedule</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.bannerSubtitle}
                >
                    Cash Games & Tournaments — Open 7 Days a Week
                </motion.p>
            </section>

            {/* Cash Games */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Cash Games <span className="text-gradient-gold">Daily Schedule</span>
                </h2>
                <p className={styles.sectionSubtext}>
                    Our cash games run daily from Monday to Sunday with the same schedule. Walk-ins are welcome — reservations recommended.
                </p>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Table</th>
                                <th>Start Time</th>
                                <th>Game</th>
                                <th>Stakes</th>
                                <th>Min Buy-in</th>
                                <th>Rake</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cashGames.map((game) => (
                                <tr key={game.table}>
                                    <td className={styles.tdHighlight}>{game.table}</td>
                                    <td>{game.time}</td>
                                    <td>{game.game}</td>
                                    <td className={styles.tdHighlight}>{game.stakes}</td>
                                    <td>{game.minBuyin}</td>
                                    <td>{game.rake}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Weekly Overview */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Weekly <span className="text-gradient-gold">Overview</span>
                </h2>
                <div className={styles.weekGrid}>
                    {days.map((day, i) => (
                        <motion.div
                            key={day}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={styles.dayCard}
                        >
                            <h3>{day}</h3>
                            <div className={styles.dayGames}>
                                <div className={styles.dayGame}>
                                    <span className={styles.gameTime}>7:00 PM</span>
                                    <span className={styles.gameName}>Texas Hold&apos;em NL</span>
                                    <span className={styles.gameStakes}>100/200</span>
                                </div>
                                <div className={styles.dayGame}>
                                    <span className={styles.gameTime}>8:00 PM</span>
                                    <span className={styles.gameName}>PLO 5</span>
                                    <span className={styles.gameStakes}>100/200</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Info Notes */}
            <section className={styles.contentSection}>
                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>💰 Payment Methods</h3>
                        <p>Cash, Cryptocurrency, Credit Cards, Electronic Transfers</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>🕐 Operating Hours</h3>
                        <p>14:00 PM — 05:00 AM, Seven Days a Week</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>📞 Reservations</h3>
                        <p>Recommended during peak hours. Contact Telegram @tpcbkk</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.ctaCard}
                >
                    <h2>Ready to Play?</h2>
                    <p>Reserve your seat or walk in — we are open 7 days a week.</p>
                    <Link href="/contact" className={styles.ctaPrimary}>Contact Us to Reserve</Link>
                </motion.div>
            </section>
        </div>
    );
}
