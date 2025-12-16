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

const heroImage = {
  src: "https://images.unsplash.com/photo-1529518062745-6082f052f6aa?auto=format&fit=crop&w=1600&q=80",
  alt: "Community gathering outdoors with shared celebration",
};

export const HeroSection = () => (
  <Section
    as="header"
    background="paper"
    className="overflow-hidden"
    containerClassName="relative grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(255,233,201,0.32),transparent_38%),radial-gradient(circle_at_88%_18%,rgba(198,138,31,0.12),transparent_42%)]" />
    <div className="relative space-y-6 text-center lg:text-left">
      <Eyebrow className="text-gold-600">Arts & Culture • Spiritual Guidance • Pan-African Service</Eyebrow>
      <Heading className="text-balance leading-tight text-ink-900" level={1}>
        Calm, centered support for thriving African communities
      </Heading>
      <Body className="mx-auto max-w-3xl text-lg text-ink-800 lg:mx-0">
        We combine spiritual wellbeing, cultural stewardship, and practical services so local leaders can design futures rooted
        in dignity. Explore the Volta Region season, transparent budgets, and partner-ready pilots built with community voices.
      </Body>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
        <Button as={Link} size="lg" to="/donate" variant="primary">
          Donate today
        </Button>
        <Button as={Link} size="lg" to="/programs" variant="outline">
          View programs
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
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
    </div>

    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-amber-100 shadow-[0_30px_120px_rgba(69,52,43,0.24)]">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-amber-50/10 to-amber-100/80" />
      <img alt={heroImage.alt} className="h-full w-full object-cover" src={heroImage.src} />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-ink-900">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-700">Foundation in action</p>
        <p className="mt-2 max-w-md text-base text-ink-800">
          Field teams gathering with elders, youth, and partners to plan the next season of service.
        </p>
      </div>
    </div>
  </Section>
);

export default HeroSection;
