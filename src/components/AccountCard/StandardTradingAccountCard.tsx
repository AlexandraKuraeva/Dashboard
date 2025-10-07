import React from 'react';
import type  { StandardTradingAccount } from '../../types/accounts';
import Button from '../ui/Button/Button';

interface Props {
  account: StandardTradingAccount;
  onDeposit: (id: string) => void;
  onReactivate: (id: string) => void;
}

const StandardTradingAccountCard: React.FC<Props> = ({
  account,
  onDeposit,
  onReactivate,
}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16 }}>
      <h3>Стандартный счёт #{account.id}</h3>
      <p>Equity: {account.equity}</p>
      <p>Плечо: {account.leverage}</p>
      {account.active ? (
        account.demo ? (
          <p>Демо-счёт</p>
        ) : (
          <Button onClick={() => onDeposit(account.id)}>Депозит</Button>
        )
      ) : (
        <Button onClick={() => onReactivate(account.id)}>Активировать</Button>
      )}
    </div>
  );
};

export default StandardTradingAccountCard;
