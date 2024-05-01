import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
    return (<table className={css.transactionsList}>
        <thead>
            <tr>
                <th className={css.titleType}>Type</th>
                <th className={css.titleAmount}>Amount</th>
                <th className={css.titleCurrency}>Currency</th>
            </tr>
            {items.map((item) => {
                return <tr key={item.id}>
                    <td className={css.paymentType}>{item.type}</td>
                    <td className={css.paymentAmount}>{item.amount}</td>
                    <td className={css.paymentCurrency}>{item.currency}</td>
                </tr>
            })}
        </thead>
    </table>);
}