import PropTypes from 'prop-types';

import style from './TransactionHistory.module.css'


const TransactionHistory = ({items}) => {
    return (<table className={style.transactionHistory}>
        <thead>
            <tr className={style.head}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        {items.map(item => {
            return <tbody key={item.id}>
            <tr className={style.row}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        </tbody>})}

    </table>);
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
}

export default TransactionHistory;