import type { Meta, StoryObj } from '@storybook/react';
import { Body, Button, Heading, Section } from '.';

const meta: Meta<typeof Section> = {
  title: 'Foundations/Section',
  component: Section,
  args: {
    children: (
      <div className="space-y-6">
        <Heading level={2}>Calm, centered shell</Heading>
        <Body>
          Sections manage vertical rhythm, optional textures, and container padding so every page inherits generous spacing
          without extra wrappers.
        </Body>
        <div className="flex flex-wrap gap-3">
          <Button>Primary CTA</Button>
          <Button variant="outline">Secondary</Button>
        </div>
      </div>
    )
  }
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {};

export const Tinted: Story = {
  args: {
    background: 'tinted'
  }
};

export const Muted: Story = {
  args: {
    background: 'muted'
  }
};

export const Paper: Story = {
  args: {
    background: 'paper'
  }
};

export const Inverted: Story = {
  args: {
    background: 'inverted',
    paddedContainer: true
  }
};
