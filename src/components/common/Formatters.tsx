import React from 'react';

/**
 * FormattedDate — Renders a date in German format (TT.MM.JJJJ).
 */
export const FormattedDate: React.FC<{ date: Date | string; className?: string }> = ({
  date,
  className,
}) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const formatted = d.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return <time dateTime={d.toISOString()} className={className}>{formatted}</time>;
};

/**
 * FormattedNumber — Renders a number in German locale format (1.000,00).
 */
export const FormattedNumber: React.FC<{
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}> = ({ value, decimals = 0, suffix = '', className }) => {
  const formatted = value.toLocaleString('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <span className={className}>{formatted}{suffix}</span>;
};

/**
 * FormattedPhone — Renders a phone number in E.164 format (+49 XXX XXXXXXX)
 * with a clickable tel: link.
 */
export const FormattedPhone: React.FC<{
  /** Raw phone number, e.g. '+4917670162293' or '017670162293' */
  number: string;
  className?: string;
}> = ({ number, className }) => {
  // Normalize to E.164
  const cleaned = number.replace(/[\s\-\(\)]/g, '');
  const e164 = cleaned.startsWith('0')
    ? `+49${cleaned.slice(1)}`
    : cleaned.startsWith('+')
      ? cleaned
      : `+49${cleaned}`;

  // Display format: +49 176 70162293
  const display = e164.replace(/^\+49(\d{3})(\d+)$/, '+49 $1 $2');

  return (
    <a href={`tel:${e164}`} className={className} aria-label={`Anrufen: ${display}`}>
      {display}
    </a>
  );
};
