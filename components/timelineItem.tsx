// components/timelineItem.tsx
'use client';

import Image from 'next/image';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { SvgIconComponent } from '@mui/icons-material';

interface TimelineEntryProps {
  side: 'left' | 'right';
  icon: SvgIconComponent;
  iconColor: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  imageSrc: string;
  imageAlt: string;
  title: string;
  organization?: string;
  period?: string;
  description?: string;
  bulletPoints?: string[];
  isLast?: boolean;
}

export default function TimelineEntry({
  side,
  icon: IconComponent,
  iconColor,
  imageSrc,
  imageAlt,
  title,
  organization,
  period,
  description,
  bulletPoints,
  isLast = false
}: TimelineEntryProps) {
  
  return (
    <TimelineItem className={`fade-${side} py-3 sm:py-5`}>
      <TimelineOppositeContent className="hidden md:block">
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={iconColor}>
          <IconComponent />
        </TimelineDot>
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <div className="p-2 sm:p-4">
          <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
          {organization && period && (
            <p className="text-gray-400 font-bold py-1 sm:py-2 text-sm sm:text-base">
              {organization} | {period}
            </p>
          )}
          {description && (
            <p className="text-sm sm:text-base">{description}</p>
          )}
          {bulletPoints && (
            <ul className='py-1 sm:py-2 text-sm sm:text-base'>
              {bulletPoints.map((point, index) => (
                <li key={index} className='py-1'>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}