
'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedArrowProps {
  href: string;
  className?: string;
  ariaLabel?: string;
}

export default function AnimatedArrow({ href, className, ariaLabel = "Scroll to next section" }: AnimatedArrowProps) {
  return (
    <div className={cn("absolute bottom-10 left-1/2 -translate-x-1/2 z-10", className)}>
      <Link href={href} passHref legacyBehavior>
        <a
          aria-label={ariaLabel}
          className="p-2 rounded-full hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors animate-bounce-subtle block"
        >
          <ChevronDown className="h-8 w-8 text-primary drop-shadow-md" />
        </a>
      </Link>
    </div>
  );
}
