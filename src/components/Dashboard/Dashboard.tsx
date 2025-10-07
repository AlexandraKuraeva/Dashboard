import React, { useEffect, useState } from 'react';
import type  { TradingAccount } from '../../types/accounts';
import { fetchAccounts } from '../../api/accounts';
import AccountCard from '../AccountCard';
import AddAccountButton from '../AddAccountButton';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
  const [accounts, setAccounts] = useState<TradingAccount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts().then((data) => {
      setAccounts(data);
      setLoading(false);
    });
  }, []);

  const handleDeposit = (id: string) => {
    alert(`Депозит на счет ${id}`);
  };

  const handleReactivate = (id: string) => {
    alert(`Реактивация счета ${id}`);
  };

  const handleOpenApp = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      alert('Открываю приложение...');
    } else {
      window.open('https://apps.apple.com/', '_blank');
    }
  };

  const activeCount = accounts.filter(
    (a) => a.type === 'StandardTradingAccount' && a.active
  ).length;

  return (
    <div>
      <h2>Ваши счета</h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <div className={styles.accounts}>
            {accounts.map((acc) => (
              <AccountCard
                key={acc.id}
                account={acc}
                onDeposit={handleDeposit}
                onReactivate={handleReactivate}
                onOpenApp={handleOpenApp}
              />
            ))}
          </div>

          <AddAccountButton activeCount={activeCount} />
        </>
      )}
    </div>
  );
};

export default Dashboard;