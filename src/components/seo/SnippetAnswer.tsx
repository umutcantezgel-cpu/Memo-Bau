import React, { ReactNode } from 'react';

interface SnippetAnswerProps {
  /** The question (rendered as h2/h3 for snippet targeting) */
  question: string;
  /** Short answer (40–60 words) — the snippet candidate */
  shortAnswer: string;
  /** Optional detailed answer below the short one */
  detailedAnswer?: ReactNode;
  /** Heading level: 2 (default) or 3 */
  headingLevel?: 2 | 3;
  /** Optional CSS class */
  className?: string;
}

/**
 * SnippetAnswer — Featured-Snippet-optimized Q&A block.
 *
 * Renders a question as a heading with a concise 40-60 word answer directly
 * underneath (Google's preferred snippet format). Optionally includes a
 * detailed expandable answer.
 *
 * Also outputs hidden FAQPage JSON-LD for Google's structured data.
 */
export const SnippetAnswer: React.FC<SnippetAnswerProps> = ({
  question,
  shortAnswer,
  detailedAnswer,
  headingLevel = 2,
  className = '',
}) => {
  const Heading = `h${headingLevel}` as React.ElementType;

  // FAQPage structured data for this Q&A pair
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: shortAnswer,
        },
      },
    ],
  };

  return (
    <div className={`snippet-answer ${className}`}>
      <Heading className="text-xl md:text-2xl font-bold text-neutral-darkgray mb-3">
        {question}
      </Heading>
      <p className="text-base text-neutral-darkgray leading-relaxed mb-4 font-normal">
        {shortAnswer}
      </p>
      {detailedAnswer && (
        <div className="text-sm text-neutral-midgray leading-relaxed">
          {detailedAnswer}
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
};
