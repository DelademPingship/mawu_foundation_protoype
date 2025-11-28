import type { Meta, StoryObj } from '@storybook/react';
import { Body, Button, Card, CardContent, CardFooter, CardHeader, Heading } from '.';

const meta: Meta<typeof Card> = {
  title: 'Foundations/Card',
  component: Card,
  args: {
    children: 'Card content'
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <Heading level={3}>Lightweight card shell</Heading>
          <Body variant="muted">Subtle borders, warm neutrals, and ample spacing keep content calm and legible.</Body>
        </CardHeader>
        <CardContent>
          <Body variant="muted">Use this treatment for story previews, checklists, or simple program overviews.</Body>
          <Body variant="muted">Cards respond to hover with a gold border instead of heavy shadows.</Body>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="primary">
            Donate
          </Button>
          <Button size="sm" variant="outline">
            Learn more
          </Button>
        </CardFooter>
      </>
    )
  }
};

export const Bleed: Story = {
  args: {
    bleed: true,
    className: 'p-0 overflow-hidden',
    children: (
      <>
        <img
          alt="Solar Learning Lab"
          className="h-40 w-full object-cover"
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
        />
        <div className="space-y-4 p-6">
          <Heading level={3}>Solar Learning Labs</Heading>
          <Body variant="muted">
            Off-grid classrooms in Keta and Hohoe blending digital curricula with local mentorship to accelerate STEM pathways.
          </Body>
        </div>
      </>
    )
  }
};
