'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Trophy, Crown, Gem, Shield, Handshake, Heart, Users, FileCheck, ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import { clsx } from 'clsx';

const faqData = [
    {
        q: "What are the operating hours of the poker club?",
        a: "Our poker club operates from 14:00 PM to 05:00 AM, seven days a week. We strive to provide a convenient and flexible schedule for our players to enjoy their favorite card games."
    },
    {
        q: "Do I need a membership to play at the club?",
        a: "Yes, we offer membership options that provide various benefits, including priority seating, members-only events, and discounts on food and beverages. However, non-members are also welcome to play."
    },
    {
        q: "Can I make reservations for a specific table or game?",
        a: "Absolutely! We recommend making reservations, especially during peak hours, to secure your preferred table or game. You can make reservations by contacting us via phone or through our website."
    },
    {
        q: "What types of poker games are offered?",
        a: "We offer a variety of poker games, including Texas Hold'em, Omaha, and other popular variants. Our schedule may vary, so check our events calendar for the latest game offerings."
    },
    {
        q: "Are there regular tournaments and cash games available?",
        a: "Yes, we host regular tournaments with varying buy-ins and formats. Cash games are also available daily. Check our events calendar for upcoming tournament schedules and cash game availability."
    },
    {
        q: "What amenities does the poker club offer?",
        a: "We pride ourselves on offering a premium poker experience. Amenities include comfortable seating, high-quality poker tables, complimentary beverages and snacks, and attentive staff to ensure your enjoyment."
    },
    {
        q: "What is the minimum age to enter the poker club?",
        a: "The minimum age to enter and play at our poker club is 20 years old. Valid identification may be required for age verification."
    },
    {
        q: "What payment methods are accepted at the poker club?",
        a: "We accept various payment methods, including cash, Cryptocurrency, credit cards, and electronic transfers. Our staff can provide more details on accepted payment options."
    },
    {
        q: "Can I host a private poker event or party at the club?",
        a: "Absolutely! We offer private event packages for poker enthusiasts looking to host their own tournaments or poker parties. Contact our event team for more information on available packages and pricing."
    },
    {
        q: "Is there a dress code?",
        a: "Smart casual attire is recommended, but we do not strictly enforce a dress code. We want all our guests to feel comfortable and enjoy their time at the club."
    }
];

const whyChooseItems = [
    { icon: Shield, title: "Reputation for Excellence", desc: "We've built our name on delivering a world-class poker experience that keeps players coming back." },
    { icon: Handshake, title: "We Build Partnerships", desc: "Affiliated with Titan Poker Inc UK, Pokerdiscover, and Gutshot Media Group Inc." },
    { icon: Heart, title: "Guided by Commitment", desc: "Our commitment to player satisfaction and fair play is at the core of everything we do." },
    { icon: Users, title: "A Team of Professionals", desc: "Multilingual and professionally trained staff & dealers ensure the best experience." },
    { icon: FileCheck, title: "Game Integrity", desc: "We maintain the highest standards of game integrity in accordance with international poker room standards." },
];

const testimonials = [
    {
        text: "The club staff were extremely helpful and friendly, making me feel welcome as a guest. My loved one enjoyed their hair services. Overall, the experience was characterized by a perfect balance of beautiful surroundings, friendly staff, and impeccable service. I highly recommend this place for a memorable and enjoyable experience.",
        author: "International Player",
        rating: 5,
    },
    {
        text: "World-class poker room with tasty food and well-trained staff. The ambiance is perfect for serious poker and casual games alike. Definitely the best poker experience in Bangkok!",
        author: "Regular Member",
        rating: 5,
    },
    {
        text: "Beautiful surroundings and professional dealers. The tournaments are well-organized with competitive prize pools. A must-visit for any poker player in Thailand.",
        author: "Tournament Player",
        rating: 5,
    },
];

const blogPosts = [
    { title: "The Unseen Hand: Exposing Cheating in Live Poker", tag: "Strategy", img: "/images/blog_cheating.jpg" },
    { title: "How to Get out of a Poker Downswing", tag: "Tips", img: "/images/blog_downswing.jpg" },
    { title: "What Is 'The Stand Up Game'?", tag: "Education", img: "/images/blog_standup.jpg" },
    { title: "Titan Poker Club's August Cash Festival With VIP Perks!", tag: "Events", img: "/images/blog_festival.jpg" },
];

export default function Home() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <div className={styles.page}>
            {/* ===== HERO SECTION ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/hero_bg.jpg"
                        alt="Titan Poker Club Luxury Interior"
                        fill
                        priority
                        style={{ objectFit: 'cover', opacity: 0.35 }}
                    />
                    <div className={styles.heroOverlay} />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className={clsx(styles.glowBlob, styles.glowPrimary)}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className={clsx(styles.glowBlob, styles.glowAccent)}
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={styles.heroContent}
                >
                    <motion.div variants={itemVariants} className={styles.badge}>
                        ♛ Bangkok&apos;s Premier Poker Room
                    </motion.div>

                    <motion.h1 variants={itemVariants} className={styles.title}>
                        Your Premier<br />
                        <span className="text-gradient-gold">Poker Destination</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.subtitle}>
                        Experience the real poker at Titan Poker Club. Professional dealers,
                        premium ambiance, and thrilling tournaments — all in the heart of Bangkok.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.heroCtas}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            <span>
                                JOIN NOW <ArrowRight size={20} />
                            </span>
                        </Link>
                        <Link href="/games-schedule" className={styles.secondaryBtn}>
                            View Schedule
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>4</span>
                            <span className={styles.statLabel}>Venues Across Thailand</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statValue}>7</span>
                            <span className={styles.statLabel}>Days a Week</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statValue}>14:00</span>
                            <span className={styles.statLabel}>to 05:00 AM</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className={styles.section}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2>Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
                    <p>Everything you need to know about Titan Poker Club</p>
                </motion.div>

                <div className={styles.faqGrid}>
                    <div className={styles.faqList}>
                        {faqData.slice(0, 5).map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={clsx(styles.faqItem, openFaq === i && styles.faqItemActive)}
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className={styles.faqQuestion}>
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.faqAnswer}
                                        >
                                            <p>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                    <div className={styles.faqList}>
                        {faqData.slice(5).map((faq, i) => (
                            <motion.div
                                key={i + 5}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={clsx(styles.faqItem, openFaq === i + 5 && styles.faqItemActive)}
                                onClick={() => setOpenFaq(openFaq === i + 5 ? null : i + 5)}
                            >
                                <div className={styles.faqQuestion}>
                                    <span>{faq.q}</span>
                                    {openFaq === i + 5 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                                <AnimatePresence>
                                    {openFaq === i + 5 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.faqAnswer}
                                        >
                                            <p>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE SECTION ===== */}
            <section className={clsx(styles.section, styles.sectionDark)}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2>Why Choose <span className="text-gradient-gold">Titan Poker Club</span></h2>
                    <p>Experience the real poker</p>
                </motion.div>

                <div className={styles.whyGrid}>
                    {whyChooseItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.whyCard}
                        >
                            <div className={styles.whyIcon}>
                                <item.icon size={24} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== GAMES SECTION ===== */}
            <section className={styles.section}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2>Our <span className="text-gradient-gold">Games</span></h2>
                    <p>Two premier poker variants available daily</p>
                </motion.div>

                <div className={styles.gamesGrid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.gameCard}
                    >
                        <div className={styles.gameCardImage}>
                            <Image src="/images/game_holdem.jpg" alt="Texas Hold'em" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.gameCardOverlay} />
                            <h3 className={styles.gameCardTitle}>Texas Hold&apos;em No Limit</h3>
                        </div>
                        <div className={styles.gameCardBody}>
                            <p>The world&apos;s most popular poker variant. Test your skills against players from around the globe in our professionally managed tables.</p>
                            <Link href="/contact" className={styles.gameBtn}>JOIN MEMBERSHIP</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.gameCard}
                    >
                        <div className={styles.gameCardImage}>
                            <Image src="/images/game_plo.jpg" alt="PLO 5 Card" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.gameCardOverlay} />
                            <h3 className={styles.gameCardTitle}>Pot Limit Omaha 5 Card</h3>
                        </div>
                        <div className={styles.gameCardBody}>
                            <p>An action-packed variant with more possibilities. Five cards mean bigger hands, bigger pots, and more excitement at every table.</p>
                            <Link href="/contact" className={styles.gameBtn}>JOIN MEMBERSHIP</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== TESTIMONIALS SECTION ===== */}
            <section className={clsx(styles.section, styles.sectionDark)}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2>What People Say About <span className="text-gradient-gold">Titan Poker Club</span></h2>
                </motion.div>

                <div className={styles.testimonialWrapper}>
                    <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={styles.testimonialCard}
                    >
                        <Quote size={40} className={styles.quoteIcon} />
                        <p className={styles.testimonialText}>{testimonials[activeTestimonial].text}</p>
                        <div className={styles.testimonialStars}>
                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                            ))}
                        </div>
                        <p className={styles.testimonialAuthor}>— {testimonials[activeTestimonial].author}</p>
                    </motion.div>
                    <div className={styles.testimonialDots}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={clsx(styles.dot, activeTestimonial === i && styles.dotActive)}
                                onClick={() => setActiveTestimonial(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BLOG SECTION ===== */}
            <section className={styles.section}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2>Recent <span className="text-gradient-gold">Blog Posts</span></h2>
                    <p>Stay updated with the latest from the poker world</p>
                </motion.div>

                <div className={styles.blogGrid}>
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.blogCard}
                        >
                            <div className={styles.blogImage}>
                                <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.blogContent}>
                                <div className={styles.blogTag}>{post.tag}</div>
                                <h3 className={styles.blogTitle}>{post.title}</h3>
                                <span className={styles.blogLink}>Read More →</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
