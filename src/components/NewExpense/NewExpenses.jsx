import React from 'react';

import {NewExpenseForm} from './NewExpenseForm';
import './newExpense.css';

export const NewExpenses = ({expenseList, setexpenseList}) => {
  return (
    <div className='new-expense'>
      <NewExpenseForm expenseList={expenseList} setexpenseList={setexpenseList} />
    </div>
  );
};

