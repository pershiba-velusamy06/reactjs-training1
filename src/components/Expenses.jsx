import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import { expenses } from '../utils/constants'
import './expenses.css'
import { Card } from './Card'
export const Expenses = () => {
    return (
        <Card className='expenses'>
            <ExpenseItem expenses={expenses}/>
        </Card>
    )
}


