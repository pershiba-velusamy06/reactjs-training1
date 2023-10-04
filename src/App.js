import { useState } from "react";
import { NewExpenses } from "./components/NewExpense/NewExpenses";
import { Expenses } from "./components/expenses/Expenses";
import { expenses } from './utils/constants'
import _ from 'lodash'

function App() {

  const [expenseList, setexpenseList] = useState(expenses)
  const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
   console.log(expenses)
   
     let filterArray= _.filter(expenses,((item)=>{return item.expensesDate.year===selectedYear}))
     console.log(filterArray)  
      setFilteredYear(selectedYear);
    };

  return (
    <div>
      <h2>My Expense Tracker</h2>
      <NewExpenses setexpenseList={setexpenseList} expenseList={expenseList}/>
      <Expenses expenseList={expenseList} filterChangeHandler={filterChangeHandler} filteredYear={filteredYear}/>
    </div>
  );
}

export default App;
