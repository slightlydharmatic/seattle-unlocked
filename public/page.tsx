import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import styles from "./page.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seattle Unlocked — The city your feed doesn't show you",
  description:
    "The Seattle locals actually live in. Insider drops, hidden corners, real recommendations from the people who know the city.",
  openGraph: {
    title: "Seattle Unlocked",
    description: "The Seattle locals actually live in.",
    images: ["/kerry-park-poster.jpg"],
  },
};

export default function Home() {
  return (
    <div className={`${fraunces.variable} ${interTight.variable} ${styles.root}`}>
      <nav className={styles.topbar}>
        <div className={styles.wordmark}>
          Seattle <span>Unlocked</span>
        </div>
        <div className={styles.topbarRight}>
          <a href="#drops">This Week</a>
          <a href="#about">About</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/kerry-park-poster.jpg"
          aria-hidden="true"
        >
          <source src="/kerry-park.webm" type="video/webm" />
          <source src="/kerry-park.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrain} />

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>From the team behind Seattle for Free</div>
          <h1 className={styles.heroHeadline}>
            The Seattle locals <em>actually</em> live in.
          </h1>
          <p className={styles.heroSub}>
            Insider drops, hidden corners, and the kind of recommendations you only get from
            someone who knows the city. Not the postcard. The actual place.
          </p>
          <div className={styles.heroActions}>
            <a href="#drops" className={`${styles.btn} ${styles.btnPrimary}`}>
              See this week&apos;s drops <span className={styles.btnArrow}>→</span>
            </a>
            <a href="#newsletter" className={`${styles.btn} ${styles.btnGhost}`}>
              Get on the list
            </a>
          </div>
        </div>

        <div className={styles.locationCredit}>Kerry Park · 09:34 PM</div>
      </section>

      <section className={styles.below} id="drops">
        <div className={styles.belowInner}>
          <div className={styles.sectionLabel}>This Week</div>
          <h2 className={styles.belowHeading}>
            The city, <em>unlocked</em> — one drop at a time.
          </h2>

          <div className={styles.dropGrid}>
            <div className={styles.drop}>
              <div className={styles.dropNum}>No. 01</div>
              <div className={styles.dropTitle}>
                The Capitol Hill spot locals won&apos;t tell you about
              </div>
              <div className={styles.dropMeta}>Food · 4 min read</div>
            </div>
            <div className={styles.drop}>
              <div className={styles.dropNum}>No. 02</div>
              <div className={styles.dropTitle}>
                Where to actually see Rainier without the crowd
              </div>
              <div className={styles.dropMeta}>Views · 3 min read</div>
            </div>
            <div className={styles.drop}>
              <div className={styles.dropNum}>No. 03</div>
              <div className={styles.dropTitle}>
                The Ballard Sunday ritual you&apos;re missing
              </div>
              <div className={styles.dropMeta}>Neighborhoods · 5 min read</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.proof}>
        <div className={styles.proofInner}>
          <div className={styles.proofStat}>
            <strong>75K+</strong> locals follow us
          </div>
          <div className={styles.proofStat}>
            <strong>200+</strong> spots covered
          </div>
          <div className={styles.proofStat}>
            <strong>Seattle</strong> · made here, for here
          </div>
        </div>
      </section>
    </div>
  );
}
