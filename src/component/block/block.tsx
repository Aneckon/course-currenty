import React, { FC } from 'react';

import { Input } from '..';

interface BlockProps {
  value: number;
  onChangeValue: (data: any) => void;
  currency: any;
  onChangeCurrency: (data: any) => void;
}

const defaultCurrencies = ['UAH', 'USD', 'EUR'];

export const Block: FC<BlockProps> = ({ currency, value, onChangeValue, onChangeCurrency }) => {
  return (
    <div className="Block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'active' : ''}
            key={cur}>
            {cur}
          </li>
        ))}
      </ul>
      <Input
        value={value}
        onChangeValue={onChangeValue}
      />
    </div>
  );
};
