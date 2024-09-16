import { Component } from "react";

import "./index.css";

class Home extends Component {
  state = {
    description: "",
    amount: "",
    date: "",
    errorMsg: false,
    showErrorMsg: "Input Fields need to be filled",
    expensesList: [],
  };

  onChangeExpense = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangeAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  onChangeDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  onSubmitForm = () => {
    const { expensesList } = this.state;
    const { description, amount, date } = this.state;
    const newExpense = {
      description,
      amount,
      date,
    };

    this.setState({
      expensesList: [...expensesList, newExpense],
    });
  };

  render() {
    const { description, amount, date, errorMsg, showErrorMsg } = this.state;
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <h1 className="main-heading">Personal Expense Tracker</h1>
        <div>
          <div className="input-container">
            <p className="inputField">Expense Description</p>
            <input
              type="text"
              id="description"
              value={description}
              onChange={this.onChangeExpense}
            />
          </div>
          <div>
            <p className="inputField">Amount</p>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={this.onChangeAmount}
            />
          </div>
          <div>
            <p className="inputField">Date</p>

            <input
              type="date"
              id="date"
              onChange={this.onChangeDate}
              value={date}
            />
          </div>
        </div>
        {errorMsg && <p className="errror-msg">{showErrorMsg}</p>}
        <div>
          <button className="btn-submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default Home;
