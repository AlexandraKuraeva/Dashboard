import React from 'react';
import type  { AppTradingAccount } from '../../types/accounts';
import Button from '../ui/Button/Button';

interface Props {
  account: AppTradingAccount;
  onOpenApp: () => void;
}

const AppTradingAccountCard: React.FC<Props> = ({ account, onOpenApp }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16 }}>
      <h3>App счёт #{account.id}</h3>
      <p>Баланс: {account.balance}</p>
      <Button onClick={onOpenApp}>Открыть приложение</Button>
    </div>
  );
};

export default AppTradingAccountCard;
