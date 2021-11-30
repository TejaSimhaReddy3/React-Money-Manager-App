import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const deleteHistory = () => {
    onDeleteTransaction(id)
  }

  return (
    <>
      <li className="transactionLi">
        <p className="para">{title}</p>
        <p className="para">{amount}</p>
        <p className="para">{type}</p>
        <div className="deleteButtonContainer">
          <button
            className="button1"
            type="button"
            onClick={deleteHistory}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              className="deleteImg"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </>
  )
}

export default TransactionItem
