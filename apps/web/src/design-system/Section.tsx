import type { HTMLAttributes, JSX, ReactNode } from 'react';
import { cn } from '../lib/cn';
import { Container } from './Container';

type Background = 'default' | 'tinted' | 'muted' | 'inverted' | 'paper';
type Padding = 'none' | 'sm' | 'md' | 'lg';

type Element = keyof Pick<JSX.IntrinsicElements, 'div' | 'section' | 'article' | 'header' | 'footer' | 'main'>;

const backgroundStyles: Record<Background, string> = {
  default: 'bg-transparent',
  tinted: 'bg-gradient-to-br from-sand-50 via-white to-clay-50/80',
  muted: 'bg-sand-50/60',
  paper: 'bg-[radial-gradient(circle_at_20%_20%,rgba(246,234,212,0.45),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,225,182,0.32),transparent_40%),#fdfaf5]',
  inverted: 'bg-ink-900 text-white'
};

const paddingStyles: Record<Padding, string> = {
  none: 'py-0',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24 lg:py-28'
};

export type SectionProps<T extends Element = 'section'> = {
  as?: T;
  background?: Background;
  bleed?: boolean;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  padding?: Padding;
  paddedContainer?: boolean;
} & Omit<HTMLAttributes<HTMLElementTagNameMap[T]>, 'children'>;

export const Section = <T extends Element = 'section'>(
  {
    as,
    background = 'default',
    bleed = false,
    children,
    className,
    containerClassName,
    id,
    padding = 'lg',
    paddedContainer = true,
    ...props
  }: SectionProps<T>
) => {
  const Component = as ?? 'section';

  return (
    <Component
      className={cn(
        'relative border-t border-clay-100/80 first:border-t-0',
        backgroundStyles[background],
        paddingStyles[padding],
        bleed && 'px-0',
        className
      )}
      id={id}
      {...props}
    >
      <Container className={containerClassName} padded={paddedContainer}>
        {children}
      </Container>
    </Component>
  );
};

Section.displayName = 'Section';
