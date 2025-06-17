'use client';
import { useState } from "react";
import { GridSvg, ListSvg } from "@/components/svg";

interface GridListToggleProps {
  onToggle: (view: 'grid' | 'list') => void;
  activeView: 'grid' | 'list';
}

const GridListToggle = ({ onToggle, activeView }: GridListToggleProps) => {
  return (
    <div className="tp-course-filter-top-tab tp-tab mb-20" style={{ display: 'flex', alignItems: 'center', background: '#f0f4f8', borderRadius: '50px', padding: '2px' }}>
      <ul className="nav nav-tabs" id="filterTab" role="tablist" style={{ border: 'none', display: 'flex', margin: 0, padding: 0 }}>
        <li className="nav-item" role="presentation" style={{ margin: 0 }}>
          <button
            className={`nav-link ${activeView === 'grid' ? 'active' : ''}`}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected={activeView === 'grid'}
            tabIndex={activeView === 'grid' ? 0 : -1}
            onClick={() => onToggle('grid')}
            style={{
              border: 'none',
            //   background: activeView === 'grid' ? '#008080' : 'transparent',
              color: activeView === 'grid' ? '#FFF' : '#008080',
              padding: '6px 12px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              boxShadow: activeView === 'grid' ? '0 4px 12px rgba(0, 128, 128, 0.2)' : 'none'
            }}
          >
            <GridSvg clr={activeView === 'grid' ? '#FFF' : '#008080'} />
            Grid
          </button>
        </li>
        <li className="nav-item" role="presentation" style={{ margin: 0 }}>
          <button
            className={`nav-link ${activeView === 'list' ? 'active' : ''}`}
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected={activeView === 'list'}
            tabIndex={activeView === 'list' ? 0 : -1}
            onClick={() => onToggle('list')}
            style={{
              border: 'none',
            //   background: activeView === 'list' ? '#008080' : 'transparent',
              color: activeView === 'list' ? '#FFF' : '#008080',
              padding: '6px 12px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              boxShadow: activeView === 'list' ? '0 4px 12px rgba(0, 128, 128, 0.2)' : 'none'
            }}
          >
            <ListSvg clr={activeView === 'list' ? '#FFF' : '#008080'} />
            List
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GridListToggle;