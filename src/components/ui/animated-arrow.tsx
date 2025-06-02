
'use client';

import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedArrowProps {
  href: string;
  className?: string;
  ariaLabel?: string;
  direction?: 'up' | 'down';
  text?: string;
}

export default function AnimatedArrow({
  href,
  className,
  ariaLabel = "Scroll to section",
  direction = 'down',
  text
}: AnimatedArrowProps) {
  const IconComponent = direction === 'up' ? ChevronUp : ChevronDown;

  return (
    <div className={cn(
      "absolute left-1/2 -translate-x-1/2 z-10",
      direction === 'down' ? "bottom-10" : "bottom-10",
      className
    )}>
      <Link href={href} passHref legacyBehavior>
        <a
          aria-label={ariaLabel}
          className="inline-flex flex-col items-center p-2 rounded-full hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors animate-bounce-subtle"
        >
          <IconComponent className="h-8 w-8 text-primary drop-shadow-md" />
          {text && (
            <span className="mt-1 text-xs text-primary font-body">{text}</span>
          )}
        </a>
      </Link>
    </div>
  );
}
