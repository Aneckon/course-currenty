import React, { FC } from 'react';

interface InputProps {
  value: number;
  onChangeValue: (data: any) => void;
}

export const Input: FC<InputProps> = ({ value, onChangeValue }) => {
  return (
    <div className="Input">
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder='0'
      />
    </div>
  );
};
