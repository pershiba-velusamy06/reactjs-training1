import React from 'react';
import Chart from '../card/Chart';
import _ from 'lodash';



export const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    console.log(expense.Price)
    const expenseMonth = expense.expensesDate.month; 

    let index=_.findIndex(chartDataPoints,((item)=>{return item.label===expenseMonth}))
    if(index>-1){
        console.log(expenseMonth,"expenseMonth")
        chartDataPoints[index].value += parseInt(expense.Price);
    }
   
  }

  return <Chart dataPoints={chartDataPoints} />;
};

