import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionsList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOfOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )

    const {displayText} = typeOfOption

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state

    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    console.log(balanceAmount)

    return balanceAmount
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state

    let incomeAmount = 0

    transactionsList.forEach(eachList => {
      if (eachList.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachList.amount
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachList => {
      if (eachList.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachList.amount
      }
    })
    return expensesAmount
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const postDeleteTransaction = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({transactionsList: postDeleteTransaction})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="header-container">
            <h1 className="nameHeading">Hi, Richard</h1>
            <p className="welcomeText">
              Welcome back to your{' '}
              <span className="blueText">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="transactionsMain">
            <form className="form" onSubmit={this.onSubmitForm}>
              <h1 className="formHead">Add Transaction</h1>
              <label htmlFor="textIp" className="labelText">
                TITLE
              </label>
              <input
                type="text"
                onChange={this.onChangeTitle}
                id="textIp"
                placeholder="TITLE"
                className="inputBar"
                value={titleInput}
              />
              <label htmlFor="amtIp" className="labelText">
                AMOUNT
              </label>
              <input
                type="text"
                onChange={this.onChangeAmount}
                placeholder="AMOUNT"
                className="inputBar"
                id="amtIp"
                value={amountInput}
              />
              <label htmlFor="typeName" className="labelText">
                TYPE
              </label>
              <select
                id="typeName"
                onChange={this.onChangeType}
                className="inputBar"
                value={optionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="paymentsHistoryContainer">
              <h1 className="historyHeading">History</h1>
              <div className="transactionsTableContainer">
                <ul className="headingsUl">
                  <li className="headingsLi">
                    <p className="heads">Title</p>
                    <p className="heads">Amount</p>
                    <p className="heads">Type</p>
                    <p className="heads"> </p>
                  </li>
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
