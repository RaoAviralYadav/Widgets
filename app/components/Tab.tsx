'use client';
import React from 'react';

type TabProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Tab({ label, active = false, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`tab-pill px-4 py-2 mr-3 text-sm ${active ? 'tab-active' : 'text-gray-300/80'}`}
      aria-pressed={active}
      type="button"
    >
      {label}
    </button>
  );
}
