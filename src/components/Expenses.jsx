import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { expenses } from '../utils/constants'
import './expenses.css'
export const Expenses = () => {
    return (
        <div className='expenses'>
            <ExpenseItem expenses={expenses}/>
        </div>
    )
}


