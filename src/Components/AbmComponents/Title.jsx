import React from 'react';
import ABMTitle from './ABMTitle'

const sections = [
  { title: 'Reach your ideal accounts faster with laser-focused retargeting', showLine: true },
  { title: 'Add accounts, contacts, and companies to your ABM pool', showLine: true },
  { title: 'Use four layers of intent data to connect with active prospects', showLine: true },
  { title: 'Displace competitors based on hardware and software install data', showLine: false, bottomSpace: true }
];

const Title = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <ABMTitle key={index} sections={[section]} />
      ))}
    </div>
  );
}

export default Title;
