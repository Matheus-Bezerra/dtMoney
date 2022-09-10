import { useContext } from 'react'
import { TransactionsContext } from '../Contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = transactions.reduce(
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
  return summary
}
