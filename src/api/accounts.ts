import type  { TradingAccount } from '../types/accounts';


export async function fetchAccounts(): Promise<TradingAccount[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          type: 'StandardTradingAccount',
          id: '1',
          active: true,
          demo: false,
          equity: 1500,
          leverage: 100,
          data: [{ timestamp: Date.now(), value: 1500 }],
        },
        {
          type: 'AppTradingAccount',
          id: '2',
          balance: 300,
        },
        {
          type: 'StandardTradingAccount',
          id: '3',
          active: false,
          demo: false,
          equity: 0,
          leverage: 50,
          data: [],
        },
      ]);
    }, 500);
  });
}
