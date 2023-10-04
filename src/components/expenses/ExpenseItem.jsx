import React, { useState } from 'react'
import './expenseItem.css'
import { ExpenseData } from './ExpenseData';

export const ExpenseItem = ({ expenses }) => {
  const [helperTitle, sethelperTitle] = useState("")

  const changeTitle=(index)=>{
    if(helperTitle!==index){
      sethelperTitle(index)
    }else{
      sethelperTitle('')
    }
   
  }

  console.log(expenses)
  return (
    <>

      {
        expenses.map((expense,index) => {
          return (<>
            <div className="expense-item" >
              <ExpenseData date={expense.expensesDate}/>
              <div className="expense-item__description">
                <h2>{index!==helperTitle?expense.expenseTitle:`${expense.expenseTitle} just clicked`}</h2>
                <div className="expense-item__price">${expense.Price}</div>
              </div>
              <button className='button-text' onClick={()=>changeTitle(index)}>Click me!</button>
            </div>
          </>)
        })
      }
    </>

  );

}

