import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryGroup, VictoryArea } from 'victory';

export default class GoalChart extends React.Component {

  render() {
    //data goes here
    let testExpenses = JSON.parse(localStorage.getItem("expenses"));
    let expenses = testExpenses.reduce( (a, b)=> {
      return Number(a.amount) + Number(b.amount);
    });
    
    // let income = JSON.parse(localStorage.getItem("user").income);
    console.log("inside goalChart", expenses);
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
                {x: 100, y: 100},
                {x: 200, y: 200},
                {x: 300, y: 300}
              ]}
            />
            <VictoryArea
              data={[
                {x: 100, y: 300},
                {x: 200, y: 400},
                {x: 300, y: 200}
              ]}
            />
          </VictoryGroup>
        </VictoryChart>

      </div>
    )
  }
}

// export default class TimeChart extends React.Component {


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
