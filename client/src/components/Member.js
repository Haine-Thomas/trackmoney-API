import React from 'react';

export const Member = ({ member }) => {
  return (
    <li className="member-item">
      {member.name} 
    </li>
  )
}