'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const partners = [
    {
        name: "Gutshot Magazine",
        desc: "Leading poker magazine providing news, strategy, and tournament coverage from around the world.",
        url: "https://gutshotmagazine.com",
    },
    {
        name: "Poker Discover",
        desc: "A comprehensive poker room directory and review platform helping players find the best games worldwide.",
        url: "https://pokerdiscover.com",
    },
    {
        name: "The Poker Chat",
        desc: "Online poker community connecting players and sharing poker knowledge across the globe.",
        url: "#",
    },
    {
        name: "Titan Poker Inc UK",
        desc: "Our parent company based in the United Kingdom, establishing international poker room standards.",
        url: "#",
    },
    {
        name: "Gutshot Media Group Inc",
        desc: "Media conglomerate specializing in poker and gaming content production and distribution.",
        url: "#",
    },
];

export default function AffiliationsPage() {
    return (
        <div className={styles.page}>
            {/* Banner */}
            <section className={styles.pageBanner}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.bannerTitle}
                >
                    Affiliations & <span className="text-gradient-gold">Recognition</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.bannerSubtitle}
                >
                    Our trusted partners and industry connections
                </motion.p>
            </section>

            {/* Partners Grid */}
            <section className={styles.contentSection}>
                <div className={styles.partnerGrid}>
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.partnerCard}
                        >
                            <div className={styles.partnerLogo}>
                                <span>{partner.name.charAt(0)}</span>
                            </div>
                            <h3>{partner.name}</h3>
                            <p>{partner.desc}</p>
                            {partner.url !== "#" && (
                                <a href={partner.url} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                                    Visit Website <ExternalLink size={14} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Affiliations */}
            <section className={styles.contentSection}>
                <div className={styles.aboutBlock}>
                    <h2>International <span className="text-gradient-gold">Network</span></h2>
                    <p>
                        Titan Poker Club Bangkok is proud to be part of an international network of poker industry leaders.
                        Our affiliations with leading media groups, poker room directories, and international poker organizations
                        ensure we maintain the highest standards of game integrity, player experience, and industry recognition.
                    </p>
                    <p>
                        These partnerships enable us to bring world-class tournaments, international player pools, and
                        comprehensive media coverage to our venues across Thailand.
                    </p>
                </div>
            </section>
        </div>
    );
}
