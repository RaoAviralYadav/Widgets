'use client';
import React, { useState } from 'react';
import Tab from './Tab';

const TABS = ['About Me', 'Experiences', 'Recommended'] as const;
type TabKey = typeof TABS[number];

const CONTENT: Record<TabKey, string> = {
  'About Me': `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a sample placeholder text to simulate the look and flow. Adjust content as required.`,
  'Experiences': `- Sales rep at Salesforce • 3 years\n- Product demo and onboarding specialist\n- Previous: Retail management, team lead\n\nUse this tab to list experiences; plain text, bullet lines, or small cards.`,
  'Recommended': `Recommendations and testimonials go here. You can paste short quotes from colleagues or clients.`
};

export default function AboutWidget(): JSX.Element {
  const [active, setActive] = useState<TabKey>('About Me');

  return (
    <div className="neumo-card p-6">
      <div className="flex items-center justify-start mb-4">
        {TABS.map((t) => (
          <Tab key={t} label={t} active={t === active} onClick={() => setActive(t)} />
        ))}
      </div>

      <div className="bg-[color:var(--card)] p-5 rounded-xl shadow-neumo">
        <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {CONTENT[active]}
        </div>

        <div className="mt-4 card-inner-hr" />

        <div className="flex items-center justify-between mt-3">
          <div className="text-xs text-gray-400">Profile details</div>
          <div className="h-16 w-2 bg-gray-700 rounded-md" />
        </div>
      </div>
    </div>
  );
}
