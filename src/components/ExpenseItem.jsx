import React from 'react'
import './expenseItem.css'
import moment from 'moment';
export const ExpenseItem=()=> {
  const  expensesDate = moment().format('DD-MM-yyyy');
  const expenseTitle = "Car Insurance";
  const Price='294.67'
    return (
        <div className="expense-item">
          <div>{expensesDate}</div>
          <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${Price}</div>
          </div>
        </div>
      );
    
}

