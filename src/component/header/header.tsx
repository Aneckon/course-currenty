import React, { FC } from 'react';

interface HeaderProps {
  dataCurrenty: any;
}

export const Header: FC<HeaderProps> = ({ dataCurrenty }) => {
  return (
    <div className="Header">
      <p>
        USD
        <span> {dataCurrenty['UAH'].toFixed(2)} UAH</span>
      </p>
      <p>
        USD
        <span> {dataCurrenty['EUR'].toFixed(2)} EUR</span>
      </p>
    </div>
  );
};
