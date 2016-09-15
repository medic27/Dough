import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryGroup, VictoryArea } from 'victory';

export default class GoalChart extends React.Component {

  render() {
    //data goes here
    let localExpenses = JSON.parse(localStorage.getItem("expenses"));
    let expenses = localExpenses.reduce( (a, b)=> {
      return Number(a.amount) + Number(b.amount);
    });
    let income = parseInt(JSON.parse(localStorage.getItem("user")).income);
    let goal = JSON.parse(localStorage.getItem("goals"));
    goal = parseInt(goal[goal.length-1].amount);

    console.log("expenses", expenses);
    console.log("income", income)
    console.log("goal", goal);

    return (
      <div className="goalChart">
        <h1>Goal Chart</h1>
        <VictoryChart>
          <VictoryGroup
            height={500}
            colorScale={"warm"}
            style={{data: {opacity: 0.3}}}
          >
            <VictoryArea
              data={[
                {x: 1, y: goal},
                {x: 2, y: goal},
                {x: 3, y: goal}
              ]}
            />
            <VictoryArea
              data={[
                {x: 1, y: 6000},
                {x: 2, y: 7000},
                {x: 3, y: 8000}
              ]}
            />
          </VictoryGroup>
        </VictoryChart>

      </div>
    )
  }
}



//   render() {
//       let cats =[];
//       let dataPoints = []
//         let testExpenses = JSON.parse(localStorage.getItem("expenses"));
//         let filler = ""

//         for (let i = 0; i< testExpenses.length;i++) {
//           let costTime ={}
//           if (i % 2 === 0 || i === 0) {
//             filler="blue"
//           } else {
//             filler="tomato"
//           }
//           cats.push(testExpenses[i].category);
//           costTime = {x:new Date(testExpenses[i].createdAt).getSeconds(), y:parseInt(testExpenses[i].amount), fill: filler}
//           dataPoints.push(costTime);
//         }

//     return (
//       <div className="time">
//       <VictoryChart
//   height={500}
//   domainPadding={{x: 220}}>
//   <VictoryStack
//     labels={cats}
//     colorScale={"qualitative"}
//   >
//     <VictoryBar
//       data={dataPoints}
//     />
//   </VictoryStack>
// </VictoryChart>
// </div>
//     )
//   }
// }
