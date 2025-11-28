import type { Meta, StoryObj } from '@storybook/react';

const brandTokens = [
  { name: 'brand-50', className: 'bg-brand-50' },
  { name: 'brand-100', className: 'bg-brand-100' },
  { name: 'brand-200', className: 'bg-brand-200' },
  { name: 'brand-300', className: 'bg-brand-300' },
  { name: 'brand-400', className: 'bg-brand-400' },
  { name: 'brand-500', className: 'bg-brand-500 text-white' },
  { name: 'brand-600', className: 'bg-brand-600 text-white' },
  { name: 'brand-700', className: 'bg-brand-700 text-white' },
  { name: 'brand-800', className: 'bg-brand-800 text-white' },
  { name: 'brand-900', className: 'bg-brand-900 text-white' }
];

const goldTokens = [
  { name: 'gold-50', className: 'bg-gold-50' },
  { name: 'gold-100', className: 'bg-gold-100' },
  { name: 'gold-200', className: 'bg-gold-200' },
  { name: 'gold-300', className: 'bg-gold-300' },
  { name: 'gold-400', className: 'bg-gold-400' },
  { name: 'gold-500', className: 'bg-gold-500 text-white' },
  { name: 'gold-600', className: 'bg-gold-600 text-white' },
  { name: 'gold-700', className: 'bg-gold-700 text-white' },
  { name: 'gold-800', className: 'bg-gold-800 text-white' },
  { name: 'gold-900', className: 'bg-gold-900 text-white' }
];

const inkTokens = [
  { name: 'ink-50', className: 'bg-ink-50' },
  { name: 'ink-100', className: 'bg-ink-100' },
  { name: 'ink-200', className: 'bg-ink-200' },
  { name: 'ink-300', className: 'bg-ink-300' },
  { name: 'ink-400', className: 'bg-ink-400' },
  { name: 'ink-500', className: 'bg-ink-500 text-white' },
  { name: 'ink-600', className: 'bg-ink-600 text-white' },
  { name: 'ink-700', className: 'bg-ink-700 text-white' },
  { name: 'ink-800', className: 'bg-ink-800 text-white' },
  { name: 'ink-900', className: 'bg-ink-900 text-white' }
];

const sandTokens = [
  { name: 'sand-50', className: 'bg-sand-50' },
  { name: 'sand-100', className: 'bg-sand-100' },
  { name: 'sand-200', className: 'bg-sand-200' },
  { name: 'sand-300', className: 'bg-sand-300' },
  { name: 'sand-400', className: 'bg-sand-400' },
  { name: 'sand-500', className: 'bg-sand-500' },
  { name: 'sand-600', className: 'bg-sand-600 text-white' },
  { name: 'sand-700', className: 'bg-sand-700 text-white' },
  { name: 'sand-800', className: 'bg-sand-800 text-white' },
  { name: 'sand-900', className: 'bg-sand-900 text-white' }
];

const clayTokens = [
  { name: 'clay-50', className: 'bg-clay-50' },
  { name: 'clay-100', className: 'bg-clay-100' },
  { name: 'clay-200', className: 'bg-clay-200' },
  { name: 'clay-300', className: 'bg-clay-300' },
  { name: 'clay-400', className: 'bg-clay-400' },
  { name: 'clay-500', className: 'bg-clay-500 text-white' },
  { name: 'clay-600', className: 'bg-clay-600 text-white' },
  { name: 'clay-700', className: 'bg-clay-700 text-white' },
  { name: 'clay-800', className: 'bg-clay-800 text-white' },
  { name: 'clay-900', className: 'bg-clay-900 text-white' }
];

const ColorSwatch = ({ name, className }: { name: string; className: string }) => (
  <div className="flex flex-col items-center gap-2 text-center text-sm text-ink-700">
    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-clay-100/80 bg-white shadow-[0_6px_24px_-18px_rgba(23,34,45,0.45)] ${className}`}>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em]">{name.split('-')[1]}</span>
    </div>
    <span>{name}</span>
  </div>
);

const TokenGroup = ({ title, tokens }: { title: string; tokens: { name: string; className: string }[] }) => (
  <div>
    <h3 className="font-display text-xl font-semibold text-ink-900">{title}</h3>
    <div className="mt-4 grid gap-6 sm:grid-cols-5 lg:grid-cols-6">
      {tokens.map((token) => (
        <ColorSwatch key={token.name} className={token.className} name={token.name} />
      ))}
    </div>
  </div>
);

const TokensDemo = () => (
  <div className="space-y-10">
    <TokenGroup title="Brand Palette" tokens={brandTokens} />
    <TokenGroup title="Gold Accent" tokens={goldTokens} />
    <TokenGroup title="Ink Neutrals" tokens={inkTokens} />
    <TokenGroup title="Sand Neutrals" tokens={sandTokens} />
    <TokenGroup title="Clay Neutrals" tokens={clayTokens} />
  </div>
);

const meta: Meta<typeof TokensDemo> = {
  title: 'Foundations/Tokens',
  component: TokensDemo,
  parameters: {
    layout: 'padded'
  }
};

export default meta;

type Story = StoryObj<typeof TokensDemo>;

export const Palette: Story = {
  render: () => <TokensDemo />
};
