import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-dark border border-secondary/20 rounded-xl p-6 hover:border-primary/50 transition-colors',
        className
      )}
    >
      {children}
    </div>
  );
}
