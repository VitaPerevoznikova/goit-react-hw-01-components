import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.row}>
            <th className={css.cell}>Type</th>
            <th className={css.cell}>Amount</th>
            <th className={css.cell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type,amount,currency }) => {
            return (
              <tr key={id} className={css.line}>
                <td className={css.cell}>{type}</td>
                <td className={css.cell}>{amount}</td>
                <td className={css.cell}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
