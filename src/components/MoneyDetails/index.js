import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="moneyContainers">
      <div className="balanceContainer middleContainers">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="moneyImgs"
          alt="balance"
        />
        <div className="mainContainers">
          <p className="containerHead">Your Balance</p>
          <p className="mainMoney" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="incomeContainer middleContainers">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="moneyImgs"
        />
        <div className="mainContainers">
          <p className="containerHead">Your Income</p>
          <p className="mainMoney" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expensesContainer middleContainers">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="moneyImgs"
        />
        <div className="mainContainers">
          <p className="containerHead">Your Expenses</p>
          <p className="mainMoney" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
