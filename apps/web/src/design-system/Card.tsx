import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  bleed?: boolean;
};

export const Card = ({ bleed = false, className, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-3xl border border-clay-200/80 bg-white/80 backdrop-blur shadow-[0_14px_40px_-28px_rgba(23,34,45,0.35)] transition hover:border-gold-200 hover:shadow-soft focus-within:border-gold-200',
      !bleed && 'p-8 sm:p-10',
      bleed && 'overflow-hidden',
      className
    )}
    {...props}
  />
);

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={cn('mb-4 flex flex-col gap-2', className)} {...props} />
);

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn('space-y-4 text-sm text-ink-600', className)} {...props} />
);

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div className={cn('mt-6 flex flex-wrap gap-3 text-sm font-semibold', className)} {...props} />
);
