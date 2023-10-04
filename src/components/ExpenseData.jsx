import React from 'react'
import moment from 'moment'
import './expenseDate.css'
export const ExpenseData = () => {
    return (
        <div className='expense-date '>
            <div className='expense-date__month'>{moment().format('MMM')}</div>
            <div className='expense-date__year'>{moment().format('yyyy')}</div>
            <div className='expense-date__day'>{moment().format('DD')}</div>
        </div>

    )
}


