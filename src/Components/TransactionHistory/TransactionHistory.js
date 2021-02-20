import PropTypes from 'prop-types';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    transactionHistory: {
      width: 700,
      height: 600,
      margin: 30,
      textAlign: 'center',
      boxShadow: '0 0 5px',
      
    },
    thead: {
      color: 'gray',
      backgroundColor: 'lightblue',
      height: 70,
    },
    tbody: {
      color: 'gray',
    },
})

const TransactionHistory = ({ items }) => {
    const classes = useStyles();
    return (
<table className={classes.transactionHistory}>
  <thead className={classes.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={classes.tbody}>
    {items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
        </tr>
    ))}
   
  </tbody>
</table>
)};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ).isRequired,
}

export default TransactionHistory;