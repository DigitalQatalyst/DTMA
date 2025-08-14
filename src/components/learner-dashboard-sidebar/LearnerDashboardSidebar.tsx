"use client";
import React from 'react';

export default function LearnerDashboardSidebar() {
  return (
    <aside style={{ width: '25%', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <h3>Filters</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#008080' }}>Category</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#008080' }}>Price Range</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#008080' }}>Rating</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none', color: '#008080' }}>Duration</a></li>
      </ul>
    </aside>
  );
}