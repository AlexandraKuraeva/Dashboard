import React from 'react'
import type { TradingAccount } from '../../types/accounts'
import AppTradingAccountCard from './AppTradingAccountCard'
import StandardTradingAccountCard from './StandardTradingAccountCard'

interface Props {
	account: TradingAccount
	onDeposit?: (id: string) => void
	onReactivate?: (id: string) => void
	onOpenApp?: () => void
}

const AccountCard: React.FC<Props> = ({
	account,
	onDeposit = () => {},
	onReactivate = () => {},
	onOpenApp = () => {},
}) => {
	switch (account.type) {
		case 'StandardTradingAccount':
			return (
				<StandardTradingAccountCard
					account={account}
					onDeposit={onDeposit}
					onReactivate={onReactivate}
				/>
			)
		case 'AppTradingAccount':
			return <AppTradingAccountCard account={account} onOpenApp={onOpenApp} />
		default:
			return null
	}
}

export default AccountCard
