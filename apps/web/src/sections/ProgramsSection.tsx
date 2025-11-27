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
      {programHighlights.map((program) => (
        <Card className="h-full text-left" key={program.slug}>
          <CardHeader className="gap-3">
            <Eyebrow className="text-gold-600">{program.category}</Eyebrow>
            <Heading level={3}>{program.name}</Heading>
          </CardHeader>
          <CardContent className="space-y-3 text-left">
            <Body variant="muted">{program.summary}</Body>
            <p className="text-sm font-semibold text-ink-700">Focus areas: {program.focusAreas.join(", ")}</p>
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
      ))}
    </div>
    <Button as={Link} size="lg" to="/programs" variant="outline">
      Open programs explorer
    </Button>
  </Section>
);

export default ProgramsSection;
