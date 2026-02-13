'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Crown, Gem, Users, Clock, DollarSign } from 'lucide-react';
import styles from './page.module.css';

export default function TournamentsPage() {
    return (
        <div className={styles.page}>
            {/* Banner */}
            <section className={styles.pageBanner}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.bannerTitle}
                >
                    <span className="text-gradient-gold">Tournaments</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.bannerSubtitle}
                >
                    Compete with the best. Win big.
                </motion.p>
            </section>

            {/* Intro */}
            <section className={styles.contentSection}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.textBlock}
                >
                    <p>
                        At Titan Poker Club, we host regular tournaments that bring together poker enthusiasts from around the world.
                        Whether you are a seasoned pro or a newcomer, our tournament structure is designed to offer thrilling competition
                        and substantial prize pools.
                    </p>
                </motion.div>
            </section>

            {/* Tournament Types */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    Tournament <span className="text-gradient-gold">Formats</span>
                </h2>

                <div className={styles.tournamentGrid}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.tournamentCard}
                    >
                        <div className={styles.tournamentImageWrapper}>
                            <Image src="/images/tournament_holdem.jpg" alt="Texas Hold'em Tournament" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.tournamentIcon}>
                            <Crown size={40} />
                        </div>
                        <h3>Texas Hold&apos;em No Limit</h3>
                        <p>
                            The classic and most prestigious tournament format. Players receive equal starting chips and compete
                            through increasing blind levels until a champion is crowned. Our tournaments feature professional
                            dealing, structured breaks, and guaranteed prize pools.
                        </p>
                        <div className={styles.tournamentFeatures}>
                            <div className={styles.featureItem}>
                                <Users size={16} />
                                <span>Multi-table Format</span>
                            </div>
                            <div className={styles.featureItem}>
                                <Clock size={16} />
                                <span>Structured Blind Levels</span>
                            </div>
                            <div className={styles.featureItem}>
                                <DollarSign size={16} />
                                <span>Guaranteed Prize Pools</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className={styles.tournamentCard}
                    >
                        <div className={styles.tournamentImageWrapper}>
                            <Image src="/images/tournament_plo.jpg" alt="PLO Tournament" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.tournamentIcon}>
                            <Gem size={40} />
                        </div>
                        <h3>Pot Limit Omaha 5 Card</h3>
                        <p>
                            An action-packed tournament variant that rewards creative play and hand reading ability.
                            With five hole cards, the possibilities for strong hands are dramatically increased,
                            leading to larger pots and more exciting showdowns.
                        </p>
                        <div className={styles.tournamentFeatures}>
                            <div className={styles.featureItem}>
                                <Trophy size={16} />
                                <span>Higher Action</span>
                            </div>
                            <div className={styles.featureItem}>
                                <Clock size={16} />
                                <span>Progressive Blinds</span>
                            </div>
                            <div className={styles.featureItem}>
                                <DollarSign size={16} />
                                <span>Competitive Buy-ins</span>
                            </div>
                        </div>
                    </motion.div>
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
                    <h2>Ready to Compete?</h2>
                    <p>Contact us to register for upcoming tournaments or to get the latest schedule.</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.ctaPrimary}>Contact Us</Link>
                        <Link href="/games-schedule" className={styles.ctaSecondary}>View Schedule</Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
