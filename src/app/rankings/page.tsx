'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

const rankings = [
    { pos: 1, name: "Player 1", country: "🇹🇭 Thailand", points: "2,450" },
    { pos: 2, name: "Player 2", country: "🇬🇧 United Kingdom", points: "2,180" },
    { pos: 3, name: "Player 3", country: "🇺🇸 United States", points: "1,920" },
    { pos: 4, name: "Player 4", country: "🇷🇺 Russia", points: "1,750" },
    { pos: 5, name: "Player 5", country: "🇰🇷 South Korea", points: "1,680" },
    { pos: 6, name: "Player 6", country: "🇯🇵 Japan", points: "1,540" },
    { pos: 7, name: "Player 7", country: "🇦🇺 Australia", points: "1,420" },
    { pos: 8, name: "Player 8", country: "🇩🇪 Germany", points: "1,350" },
    { pos: 9, name: "Player 9", country: "🇨🇳 China", points: "1,280" },
    { pos: 10, name: "Player 10", country: "🇮🇳 India", points: "1,150" },
];

export default function RankingsPage() {
    return (
        <div className={styles.page}>
            {/* Banner */}
            <section className={styles.pageBanner}>
                <Image
                    src="/images/banner_rankings.jpg"
                    alt="TPC Poker Rankings"
                    fill
                    priority
                    style={{ objectFit: 'cover', opacity: 0.25 }}
                />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.bannerTitle}
                >
                    TPC Poker <span className="text-gradient-gold">Rankings</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.bannerSubtitle}
                >
                    Community Rankings for Regular Players
                </motion.p>
            </section>

            {/* Rankings Table */}
            <section className={styles.contentSection}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Player</th>
                                <th>Country</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankings.map((player, i) => (
                                <motion.tr
                                    key={player.pos}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={i < 3 ? styles.topThree : ""}
                                >
                                    <td className={styles.posCell}>
                                        <span className={i < 3 ? styles.posHighlight : styles.posNormal}>
                                            {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${player.pos}`}
                                        </span>
                                    </td>
                                    <td className={styles.playerName}>{player.name}</td>
                                    <td>{player.country}</td>
                                    <td className={styles.tdHighlight}>{player.points}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.disclaimer}>
                    <p>Rankings are updated regularly based on tournament and cash game performance at Titan Poker Club venues.</p>
                    <p>Contact us to learn more about how to participate in the ranking system.</p>
                </div>
            </section>
        </div>
    );
}
