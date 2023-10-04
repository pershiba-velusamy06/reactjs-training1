import React, { useState } from 'react'
import './expenseItem.css'
import { ExpenseData } from './ExpenseData';

export const ExpenseItem = ({ title,amount ,date,id}) => {
  const [helperTitle, sethelperTitle] = useState("")

  const changeTitle=(index)=>{
    if(helperTitle!==index){
      sethelperTitle(index)
    }else{
      sethelperTitle('')
    }
   
  }


 

  
  return (
    <>

   
            <div className="expense-item" >
              <ExpenseData date={date}/>
              <div className="expense-item__description">
                <h2>{id!==helperTitle?title:`${title} just clicked`}</h2>
                <div className="expense-item__price">${amount}</div>
              </div>
              <button className='button-text' onClick={()=>changeTitle(id)}>Click me!</button>
            </div>
       
      
    </>

  );

}

