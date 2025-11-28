import { Link } from "react-router-dom";

import { Body, Button, Card, CardContent, CardHeader, Eyebrow, Heading, Section } from "../design-system";
import { fallbackProgramsPayload } from "../data/programs-fallback";

const programHighlights = [
  fallbackProgramsPayload.programs[0],
  fallbackProgramsPayload.programs[1],
  fallbackProgramsPayload.programs[4],
];

export const ProgramsSection = () => (
  <Section background="tinted" className="overflow-hidden" containerClassName="flex flex-col items-center gap-10 text-center">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(164,130,92,0.14),transparent_46%),radial-gradient(circle_at_80%_10%,rgba(198,138,31,0.08),transparent_40%)]" />
    <div className="relative max-w-3xl space-y-4">
      <Eyebrow className="text-gold-600">Programs</Eyebrow>
      <Heading className="text-balance leading-tight" level={2}>
        Purpose-built pilots you can help scale
      </Heading>
      <Body className="text-ink-700" variant="muted">
        Each program pairs local leadership with open dashboards and transparent budgets. Preview the highlights below or open
        the full explorer to filter by category, region, and impact metric.
      </Body>
    </div>

    <div className="relative grid w-full gap-5 lg:grid-cols-3">
      {programHighlights.map((program) => {
        const keyActions = program.outcomes?.slice(0, 2) ?? [];

        return (
          <Card className="h-full text-left" key={program.slug}>
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-amber-50">
              {program.heroImage ? (
                <img alt={program.title} className="h-full w-full object-cover" src={program.heroImage} />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/65 via-ink-900/10 to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-200">
                {program.category}
              </p>
            </div>
            <CardHeader className="gap-3">
              <Heading level={3}>{program.title}</Heading>
              <Body className="text-ink-700" variant="muted">
                {program.summary}
              </Body>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              {keyActions.length ? (
                <ul className="space-y-2 text-sm text-ink-800">
                  {keyActions.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </CardContent>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={Link} size="sm" to={`/programs/${program.slug}`} variant="outline">
                View details
              </Button>
              <Button as={Link} size="sm" to="/donate" variant="ghost">
                Fund the work
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
    <Button as={Link} size="lg" to="/programs" variant="outline">
      Open programs explorer
    </Button>
  </Section>
);

export default ProgramsSection;
