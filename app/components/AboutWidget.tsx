'use client';
import React, { useState } from 'react';

const TABS = ['About Me', 'Experiences', 'Recommended'] as const;
type TabKey = typeof TABS[number];

const CONTENT: Record<TabKey, string> = {
  'About Me': `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,

  'Experiences': `Sales Representative at Salesforce (3 years)
• Led enterprise client onboarding and product demonstrations
• Achieved 150% of quarterly sales targets consistently
• Managed key accounts worth $2M+ in annual revenue

Previous Experience:
• Retail Management & Team Lead (5 years)
• Customer Success Specialist (2 years)

Core Competencies:
• Enterprise Sales & Account Management
• Product Training & Demonstrations
• Client Relationship Building
• CRM Systems (Salesforce, HubSpot)`,

  'Recommended': `"Dave is an exceptional sales professional who consistently goes above and beyond for his clients. His deep product knowledge and genuine care for customer success make him a valuable asset to any team."
- Sarah Johnson, VP of Sales

"Working with Dave has been a game-changer for our company. He took the time to understand our unique needs and provided solutions that truly transformed our workflow."
- Michael Chen, CTO at TechCorp

"One of the most dedicated and knowledgeable sales reps I've worked with. Dave's professionalism and expertise are unmatched."
- Emily Rodriguez, Director of Operations`
};

export default function AboutWidget() {
  const [active, setActive] = useState<TabKey>('About Me');

  return (
    <div className="widget-container" role="region" aria-label="About widget">
      
      <button
        className="icon-button help-icon"
        aria-label="Help"
        title="Help"
        tabIndex={-1}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          role="img"
        >
          <defs>
            <linearGradient id="helpGrad" x1="0" x2="1" y1="0" y2="1" gradientTransform="rotate(-32)">
              <stop offset="0%" stopColor="#4A4E54" />
              <stop offset="100%" stopColor="#A3ADBA" />
            </linearGradient>
          </defs>

          
          <circle cx="12" cy="12" r="10" stroke="url(#helpGrad)" strokeWidth="1.6" opacity="0.95" fill="none" />
          
          <path d="M12 16v.01" stroke="url(#helpGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.6 9.6c0-1.3 1.05-2.35 2.35-2.35 1.3 0 2.35 1.05 2.35 2.35 0 1.42-1.42 1.52-1.88 2.14-.54.79-.45 1.33-.45 1.69" stroke="url(#helpGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      
      <button
        className="icon-button grid-icon"
        aria-label="Grid"
        title="Grid"
        tabIndex={-1}
      >
        
        <div className="grid-icon-box"></div>
        <div className="grid-icon-box"></div>
        <div className="grid-icon-box"></div>
        <div className="grid-icon-box"></div>
        <div className="grid-icon-box"></div>
        <div className="grid-icon-box"></div>
      </button>

      
      <div className="widget-content">
        
        <div className="tab-background" role="tablist" aria-label="profile tabs">
          <div className="tab-container" aria-hidden={false}>
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`tab-button ${active === tab ? 'tab-active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        
        <div key={active} className={`content-text-direct content-text-animate`} tabIndex={0}>
          {CONTENT[active]}
        </div>
      </div>
    </div>
  );
}