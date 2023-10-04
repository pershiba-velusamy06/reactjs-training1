import React from 'react'
import moment from 'moment'
import './expenseDate.css'
export const ExpenseData = ({date}) => {
    return (
        <div className='expense-date '>
            <div className='expense-date__month'>{date.month}</div>
            <div className='expense-date__year'>{date.year}</div>
            <div className='expense-date__day'>{date.Date}</div>
        </div>

    )
}


