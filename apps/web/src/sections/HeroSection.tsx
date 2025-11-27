import { Link } from "react-router-dom";

import { Body, Button, Card, Eyebrow, Heading, Section } from "../design-system";

const heroStats = [
  {
    label: "Countries collaborating",
    value: "11",
    description: "Grassroots partners advancing shared blueprints across three regions.",
  },
  {
    label: "Residents reached",
    value: "42k",
    description: "Families supported with health, education, water, and climate resources.",
  },
  {
    label: "Seasonal pilots",
    value: "9",
    description: "Volta Region initiatives stress-testing solutions before scaling.",
  },
];

export const HeroSection = () => (
  <Section
    as="header"
    background="paper"
    className="overflow-hidden"
    containerClassName="relative flex flex-col items-center gap-12 text-center"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,233,201,0.35),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(198,138,31,0.15),transparent_38%)]" />
    <div className="relative space-y-6">
      <Eyebrow className="text-gold-600">Arts & Culture • Spiritual Guidance • Pan-African Service</Eyebrow>
      <Heading className="text-balance leading-tight text-ink-900" level={1}>
        Calm, centered support for thriving African communities
      </Heading>
      <Body className="mx-auto max-w-3xl text-lg text-ink-800">
        We combine spiritual wellbeing, cultural stewardship, and practical services so local leaders can design futures rooted
        in dignity. Explore the Volta Region season, transparent budgets, and partner-ready pilots built with community voices.
      </Body>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button as={Link} size="lg" to="/donate" variant="primary">
          Donate today
        </Button>
        <Button as={Link} size="lg" to="/programs" variant="outline">
          View programs
        </Button>
      </div>
    </div>

    <div className="grid w-full gap-4 sm:grid-cols-3">
      {heroStats.map((stat) => (
        <Card className="text-left" key={stat.label}>
          <p className="text-4xl font-semibold text-gold-700">{stat.value}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink-600">{stat.label}</p>
          <Body className="mt-3 text-sm" variant="muted">
            {stat.description}
          </Body>
        </Card>
      ))}
    </div>
  </Section>
);

export default HeroSection;
