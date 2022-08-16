import React from 'react';

import { Block, Header } from './component';

import { FetchCurrenty } from './component/api';

export const App = () => {
  const [rates, setRates] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [formCurrency, setFormCurrency] = React.useState('UAH');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [formPrice, setFormPrice] = React.useState<number>(0);
  const [toPrice, setToPrice] = React.useState<number>(0);

  React.useEffect(() => {
    FetchCurrenty(setRates, setIsLoading);
  }, []);

  const onChangeFormPrice = (value: number) => {
    const price = value / rates[formCurrency];
    const res = price * rates[toCurrency];
    setToPrice(res)

    setFormPrice(value);
  };
  const onChangeToPrice = (value: number) => {
    const price = value / rates[toCurrency];
    const res = price * rates[formCurrency];
    setFormPrice(res)

    setToPrice(value);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <Header dataCurrenty={rates} />
          <div className="App__contnet">
            <Block
              onChangeValue={onChangeFormPrice}
              value={formPrice}
              currency={formCurrency}
              onChangeCurrency={setFormCurrency}
            />
            <Block
              onChangeValue={onChangeToPrice}
              value={toPrice}
              currency={toCurrency}
              onChangeCurrency={setToCurrency}
            />
          </div>
        </>
      )}
    </div>
  );
};
