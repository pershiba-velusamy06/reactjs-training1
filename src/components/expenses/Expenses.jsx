import React, { useState } from 'react'
import { ExpenseItem } from './ExpenseItem'

import './expenses.css'
import { Card } from '../Common/Card'
import { ExpensesFilter } from './ExpensesFilter'
export const Expenses = ({expenseList,filteredYear,filterChangeHandler}) => {
  
    return (
        <Card className='expenses'>
               {/* <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} /> */}
            <ExpenseItem expenses={expenseList}/>
        </Card>
    )
}


