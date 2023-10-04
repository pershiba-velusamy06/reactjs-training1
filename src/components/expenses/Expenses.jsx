import React, { useState } from 'react'
import './expenses.css'
import { Card } from '../Common/Card'
import { ExpensesFilter } from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import {ExpensesChart} from './ExpenseChart'
export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {


      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenseList.filter((expense) => {
       
        return expense.expensesDate.year.toString()=== filteredYear.toString();
      });
    
    return (
        <Card className='expenses'>
               <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
               <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expensesList={filteredExpenses}/>
        </Card>
    )
}


