'use client';
import { useState } from "react";

interface GridListToggleProps {
  onToggle: (view: 'grid' | 'list') => void;
  activeView: 'grid' | 'list';
}

const GridListToggle = ({ onToggle, activeView }: GridListToggleProps) => {
  return (
    <div className="tp-course-filter-top-tab tp-tab mb-20">
      <ul className="nav nav-tabs" id="filterTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeView === 'grid' ? 'active' : ''}`}
            onClick={() => onToggle('grid')}
            type="button"
            role="tab"
            aria-selected={activeView === 'grid'}
            tabIndex={activeView === 'grid' ? 0 : -1}
          >
            <span className="grid-icon" style={{ color: activeView === 'grid' ? '#FFF' : '#008080' }}>📦</span>
            Grid
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeView === 'list' ? 'active' : ''}`}
            onClick={() => onToggle('list')}
            type="button"
            role="tab"
            aria-selected={activeView === 'list'}
            tabIndex={activeView === 'list' ? 0 : -1}
          >
            <span className="list-icon" style={{ color: activeView === 'list' ? '#FFF' : '#008080' }}>≡</span>
            List
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GridListToggle;