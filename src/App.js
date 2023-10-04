import { useState } from "react";
import { NewExpenses } from "./components/NewExpense/NewExpenses";
import { Expenses } from "./components/expenses/Expenses";
import { expenses } from './utils/constants'


function App() {



  
  const [expenseList, setexpenseList] = useState(expenses)


  return (
    <div>
      <h2>My Expense Tracker</h2>
      <NewExpenses setexpenseList={setexpenseList} expenseList={expenseList}/>
      <Expenses expenseList={expenseList} />
    </div>
  );
}

export default App;
