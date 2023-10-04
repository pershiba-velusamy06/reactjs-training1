import React from 'react';

import { ExpenseItem } from './ExpenseItem'
import './expenseList.css';

const ExpensesList = ({expensesList}) => {
  if (expensesList.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
console.log(expensesList)
  return (
    <ul className='expenses-list'>
      {expensesList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.expenseTitle}
          amount={expense.Price}
          date={expense.expensesDate}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;