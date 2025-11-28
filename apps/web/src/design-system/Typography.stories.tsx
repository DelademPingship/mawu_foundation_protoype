import type { Meta, StoryObj } from '@storybook/react';
import { Body, Caption, Eyebrow, Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Foundations/Typography',
  component: Heading,
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-6">
      <Heading level={1}>Fraunces heading — Hero statement</Heading>
      <Heading level={2}>Heading 2 — Section Title</Heading>
      <Heading level={3}>Heading 3 — Card Title</Heading>
      <Heading level={4}>Heading 4 — Highlight Title</Heading>
      <Heading level={5}>Heading 5 — Eyebrow Support</Heading>
      <Heading level={6}>Heading 6 — Compact Label</Heading>
    </div>
  )
};

export const CopyVariants: Story = {
  render: () => (
    <div className="max-w-2xl space-y-5">
      <Eyebrow>Eyebrow label</Eyebrow>
      <Body>
        Warm neutrals paired with the serif heading stack create a calm rhythm for long-form storytelling and investor demos.
      </Body>
      <Body variant="muted">
        Muted copy is ideal for supporting paragraphs or nested card details. It keeps hierarchy clear without sacrificing
        readability.
      </Body>
      <Body variant="light" className="bg-ink-900 p-6 text-white">
        Light copy demonstrates usage on dark surfaces such as hero overlays and footers.
      </Body>
      <Caption>Caption text for data sources and metrics.</Caption>
    </div>
  )
};
