import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../Contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions &&
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="40%">{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '-'}{' '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
