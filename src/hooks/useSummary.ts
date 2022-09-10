import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../Contexts/TransactionsContext'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transacion) => {
        if (transacion.type === 'income') {
          acc.income += transacion.price
          acc.total += transacion.price
        } else {
          acc.outcome += transacion.price
          acc.total -= transacion.price
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])
  return summary
}
