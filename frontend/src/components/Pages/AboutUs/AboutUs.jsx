import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
    const images = {
        gallery: [
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
            "https://picsum.photos/id/1025/800/600",
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
        ],
    };

    // Responsive switch for inline styles (keeps file self-contained)
    const [isWide, setIsWide] = useState(
        typeof window !== "undefined" ? window.innerWidth >= 900 : true
    );
    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth >= 900);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const palette = {
        bg: "#ffffff",
        text: "#0f172a",
        muted: "#6b7280",
        accent: "#111827",
        brand: "#0ea5a4", // subtle mint accent
    };

    const styles = {
        section: {
            fontFamily:
                "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
            color: palette.text,
            padding: isWide ? "6rem 2rem" : "3rem 1rem",
            maxWidth: 1200,
            margin: "0 auto",
            lineHeight: 1.6,
        },
        container: {
            display: "grid",
            gridTemplateColumns: isWide ? "1fr 560px" : "1fr",
            gap: isWide ? 48 : 18,
            alignItems: "start",
        },
        heroCard: {
            background: palette.bg,
            borderRadius: 12,
            padding: isWide ? 40 : 20,
            boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
            border: "1px solid rgba(15,23,42,0.04)",
        },
        eyebrow: {
            display: "inline-block",
            fontSize: 13,
            color: palette.muted,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 14,
        },
        title: {
            fontSize: isWide ? 44 : 28,
            lineHeight: 1.03,
            margin: "0 0 12px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: palette.accent,
        },
        subtitle: {
            margin: "0 0 18px",
            color: palette.muted,
            fontSize: 16,
            maxWidth: 680,
        },
        actions: {
            display: "flex",
            gap: 12,
            marginTop: 18,
            flexWrap: "wrap",
            alignItems: "center",
        },
        ctaPrimary: {
            background: palette.accent,
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
        },
        ctaGhost: {
            background: "transparent",
            color: palette.accent,
            border: "1px solid rgba(15,23,42,0.08)",
            padding: "12px 16px",
            cursor: "pointer",
            fontWeight: 600,
        },
        badges: {
            display: "flex",
            gap: 8,
            marginTop: 10,
            flexWrap: "wrap",
        },
        badge: {
            fontSize: 12,
            color: palette.accent,
            border: `1px solid rgba(15,23,42,0.06)`,
            padding: "6px 10px",
            borderRadius: 999,
            background: "rgba(15,23,42,0.02)",
        },
        rightColumn: {
            display: "flex",
            flexDirection: "column",
            gap: 14,
            alignItems: "stretch",
        },
        heroImageWrap: {
            borderRadius: 12,
            overflow: "hidden",
            minHeight: 360,
            boxShadow: "0 12px 30px rgba(2,6,23,0.08)",
            position: "relative",
            background: "#f8fafc",
        },
        heroImage: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
        },
        imageGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 10,
        },
        thumbnail: {
            borderRadius: 10,
            overflow: "hidden",
            minHeight: 96,
            boxShadow: "0 6px 18px rgba(2,6,23,0.06)",
            background: "#fff",
        },
        newsletterRow: {
            display: "flex",
            gap: 8,
            marginTop: 16,
            alignItems: "center",
        },
        input: {
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid rgba(2,6,23,0.06)",
            minWidth: 220,
            outline: "none",
        },
        smallMuted: { fontSize: 13, color: palette.muted },
    };

    return (
        <section style={styles.section} aria-labelledby="about-fibernook">
            <div style={styles.container}>
                <div style={styles.heroCard}>
                    <div style={styles.eyebrow}>About</div>
                    <h1 id="about-fibernook" style={styles.title}>
                        FiberNook — Crafted for confident self-expression
                    </h1>

                    <p style={styles.subtitle}>
                        We curate contemporary apparel and accessories inspired by street culture, modern aesthetics, and the effortless confidence of everyday wear. Each piece reflects a balance between creativity and functionality, designed for those who value individuality and self-expression in what they wear.

From thoughtful fabrics to mindful production, FiberNook brings together trusted global brands and emerging independent designers who share our vision for sustainability, quality, and timeless design. We’re here to help you build a wardrobe that not only looks good but also feels authentic, comfortable, and uniquely yours.
                    </p>

                    <div style={styles.badges}>
                        <span style={styles.badge}>Sustainably Sourced</span>
                        <span style={styles.badge}>Limited Drops</span>
                        <span style={styles.badge}>Free Returns</span>
                    </div>

                    <div style={styles.actions}>
                        <Link
                            className="p-2 hover:bg-gray-950 bg-black text-white  font-Kdam rounded-md"
                            to={'/shop'}
                            
                        >
                            Shop Best-sellers
                        </Link>
                        <button
                            className="p-2 hover:bg-gray-100 text-black  font-Kdam rounded-md"
                            onClick={() => (window.location.href = "/collections")}
                        >
                            Explore Collections
                        </button>

                    </div>

                    <p style={{ marginTop: 18, ...styles.smallMuted }}>
                        We partner with makers who value quality and transparency. Expect
                        thoughtful fits, clear craftsmanship, and pieces that last beyond
                        a season.
                    </p>
                </div>

                <aside style={styles.rightColumn} aria-hidden="false">

                    <div style={styles.imageGrid}>
                        {images.gallery.map((src, i) => (
                            <figure key={i} style={styles.thumbnail}>
                                <img
                                    src={src}
                                    alt={`Gallery ${i + 1}`}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                    loading="lazy"
                                />
                            </figure>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default AboutUs;