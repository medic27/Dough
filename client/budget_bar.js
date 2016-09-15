import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryStack,VictoryBar } from 'victory';


export default class BudgetBar extends React.Component {
  render() {

    let testExpenses = JSON.parse(localStorage.getItem("expenses"));
    let filler = ""
    let totalExpense = function reduce(array) {
        let total = 0;
        for (var i = array.length; i--;) {
        total +=  parseInt(array[i].amount);
        }
        return total;
    }
    let totalExp = totalExpense(testExpenses)

    let budget = JSON.parse(localStorage.getItem("goals"));
    console.log(budget)
    budget = parseInt(budget[budget.length-1].budget);

    // console.log('budget', typeof budget)
    // console.log('totalExp',totalExp)

    return (
       <div className="progress">
       <VictoryStack horizontal
         height={50}
         padding={25}
         style={{
           data: {width: 22},
           labels: {fontSize: 20}
         }}
       >
         <VictoryBar
           style={{data: {fill: "tomato"}}}
           data={[
             {x: 1, y: totalExp}
           ]}
         />
         <VictoryBar
           style={{data: {fill: "blue"}}}
           data={[
             {x: 1, y: budget}
           ]}
         />
       </VictoryStack>
        </div>
    )
  }
}