import { Box, Flex, Text, Heading, Button, Separator } from "@radix-ui/themes";

const HOLDINGS = [
  {
    num: "01",
    title: "Real Estate",
    desc: "Residential and commercial properties across key metropolitan markets.",
  },
  {
    num: "02",
    title: "Private Equity",
    desc: "Strategic positions in growth-stage companies and emerging ventures.",
  },
  {
    num: "03",
    title: "Capital Markets",
    desc: "Diversified portfolio of equities, fixed income, and alternative instruments.",
  },
  {
    num: "04",
    title: "Digital Assets",
    desc: "Forward-looking exposure to blockchain infrastructure and digital economies.",
  },
  {
    num: "05",
    title: "Legacy Investments",
    desc: "Long-horizon assets preserved and managed for generational continuity.",
  },
  {
    num: "06",
    title: "Advisory",
    desc: "Internal counsel on asset allocation, risk management, and family governance.",
  },
];

export default function Home() {
  return (
    <Box asChild>
      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="hero">
          <div className="fade-in">
            <p className="hero-logo">Est. 2025</p>
          </div>

          <Heading asChild>
            <h1 className="hero-title fade-in fade-in-delay-1">
              H <strong>REYES</strong> LLC
            </h1>
          </Heading>

          <Text asChild>
            <p className="hero-subtitle fade-in fade-in-delay-2">
              A private family holdings company stewarding diversified assets
              with discipline, discretion, and a long-term vision.
            </p>
          </Text>

          <div className="fade-in fade-in-delay-3">
            <Button
              variant="outline"
              size="3"
              highContrast
              asChild
            >
              <a href="#about">Discover More</a>
            </Button>
          </div>

          <div className="hero-scroll fade-in fade-in-delay-4">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </section>

        {/* ═══════════ ABOUT ═══════════ */}
        <section id="about" className="about">
          <div className="hr-section">
            <div className="about-grid">
              <div>
                <p className="about-label">About the Firm</p>
                <Separator size="4" mb="4" />
                <div className="about-text">
                  <p>
                    H Reyes LLC is the centralized holding entity of the Reyes
                    family’s financial interests. Founded on principles of
                    prudent stewardship and measured growth, the firm oversees a
                    diversified portfolio spanning real estate, private equity,
                    capital markets, and emerging digital assets.
                  </p>
                  <p>
                    Our approach is deliberate. We invest with conviction, manage
                    with transparency, and build with the intention of
                    generational impact. Every decision reflects a commitment to
                    preserving and expanding the legacy of the Reyes name.
                  </p>
                </div>
              </div>

              <div>
                <p className="about-label">At a Glance</p>
                <Separator size="4" mb="4" />
                <div className="about-stat-grid">
                  <div>
                    <p className="about-stat-value">6</p>
                    <p className="about-stat-label">Asset Classes</p>
                  </div>
                  <div>
                    <p className="about-stat-value">25+</p>
                    <p className="about-stat-label">Holdings</p>
                  </div>
                  <div>
                    <p className="about-stat-value">2025</p>
                    <p className="about-stat-label">Founded</p>
                  </div>
                  <div>
                    <p className="about-stat-value">∞</p>
                    <p className="about-stat-label">Time Horizon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ HOLDINGS ═══════════ */}
        <section id="holdings" className="holdings">
          <div className="hr-section">
            <div className="holdings-header">
              <p className="holdings-label">Portfolio</p>
              <Separator size="4" mb="4" mx="auto" style={{ maxWidth: 60 }} />
              <Heading asChild>
                <h2 className="holdings-title">Our Holdings</h2>
              </Heading>
            </div>

            <div className="holdings-grid">
              {HOLDINGS.map((h) => (
                <div key={h.num} className="holding-card">
                  <p className="holding-card-number">{h.num}</p>
                  <p className="holding-card-title">{h.title}</p>
                  <p className="holding-card-desc">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <p className="footer-brand">H Reyes LLC</p>
              <p className="footer-copy">
                &copy; {new Date().getFullYear()} H Reyes LLC. All rights reserved.
              </p>
            </div>
            <Flex gap="5" wrap="wrap">
              <a href="#about" className="footer-link">About</a>
              <a href="#holdings" className="footer-link">Holdings</a>
              <a href="mailto:info@hreyesllc.com" className="footer-link">Contact</a>
            </Flex>
          </div>
        </footer>
      </main>
    </Box>
  );
}
