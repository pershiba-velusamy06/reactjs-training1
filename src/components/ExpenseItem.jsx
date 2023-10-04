import React from 'react'
import './expenseItem.css'
import { ExpenseData } from './ExpenseData';

export const ExpenseItem = ({ expenses }) => {

  return (
    <>

      {
        expenses.map((expense) => {
          return (<>
            <div className="expense-item">
            <ExpenseData/>
              <div className="expense-item__description">
                <h2>{expense.expenseTitle}</h2>
                <div className="expense-item__price">${expense.Price}</div>
              </div>
            </div>
          </>)
        })
      }
    </>

  );

}

