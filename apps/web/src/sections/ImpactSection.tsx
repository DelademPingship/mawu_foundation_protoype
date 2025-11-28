import { Link } from "react-router-dom";

import { Body, Button, Card, CardContent, CardHeader, Eyebrow, Heading, Section } from "../design-system";

const impactNotes = [
  {
    title: "Clean water restored",
    description:
      "Solar pumping stations now serve river communities with reliable drinking water and irrigation corridors.",
    link: "/volta-focus",
  },
  {
    title: "Students back in class",
    description: "Mobile learning labs deliver tutoring, meals, and digital literacy to 1,200 young people each term.",
    link: "/programs",
  },
  {
    title: "Farmers earning more",
    description: "Cooperatives applying climate-smart practices lifted yields by 38% during the last harvest season.",
    link: "/stories",
  },
];

const metrics = [
  { label: "Transparent pilots", value: "23", detail: "with open dashboards and monthly field diaries" },
  { label: "Local partners", value: "48", detail: "co-creating blueprints across 11 countries" },
  { label: "Demo season", value: "Volta", detail: "focused collaborations in Ghana powering expansion" },
];

export const ImpactSection = () => (
  <Section
    background="muted"
    className="overflow-hidden"
    containerClassName="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_60%,rgba(198,138,31,0.08),transparent_42%),radial-gradient(circle_at_90%_40%,rgba(69,52,43,0.08),transparent_44%)]" />
    <div className="relative space-y-6 text-center lg:text-left">
      <Eyebrow className="text-gold-700">Impact & reporting</Eyebrow>
      <Heading className="text-balance leading-tight" level={2}>
        Border-light cards, clear stories
      </Heading>
      <Body className="text-ink-700" variant="muted">
        Quick snapshots keep the investor demo grounded. Every highlight pairs a transparent stat with a direct link to the
        narrative or program explorer so supporters can verify impact without guesswork.
      </Body>
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <Card className="text-left" key={metric.label}>
            <p className="text-3xl font-semibold text-ink-900">{metric.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-ink-500">{metric.label}</p>
            <Body className="mt-2 text-sm" variant="muted">
              {metric.detail}
            </Body>
          </Card>
        ))}
      </div>
    </div>

    <div className="relative space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-amber-100 shadow-[0_24px_80px_rgba(69,52,43,0.18)]">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/20 to-amber-50/90" />
        <img
          alt="Community volunteers facilitating an outdoor gathering"
          className="h-64 w-full object-cover"
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-amber-50">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Transparent field work</p>
          <p className="mt-2 max-w-md text-sm text-amber-50">
            Teams document progress in the open so supporters can follow every milestone alongside partners.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Heading level={3}>Latest proof points</Heading>
        <div className="grid gap-4">
          {impactNotes.map((item) => (
            <Card className="text-left" key={item.title}>
              <CardHeader className="gap-2">
                <Eyebrow className="text-gold-600">Field note</Eyebrow>
                <Heading level={4}>{item.title}</Heading>
              </CardHeader>
              <CardContent>
                <Body variant="muted">{item.description}</Body>
              </CardContent>
              <div className="mt-4">
                <Button as={Link} size="sm" to={item.link} variant="outline">
                  Read the story
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default ImpactSection;
