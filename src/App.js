import React, { Component } from 'react';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    OnGoodBtn = () => {

        console.log("OnGood")
        
    this.setState (prevState => ({
      good: prevState.good + 1
    }));
    };
    
    OnNeutralBtn = () => {
       this.setState (prevState => ({
      neutral: prevState.neutral + 1
    }));
    };
    
    OnBadBtn = () => {
        this.setState (prevState => ({
      bad: prevState.bad + 1
    }));
  };
   TotalCounter = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };
    
    PositiveCounter = () => {
        const { good } = this.state;
        const total = this.TotalCounter();
        const countNumber = Math.round((good * 100) / total);
        // console.log(total);
        // console.log(countNumber);
        return countNumber ? countNumber : 0;
        // if (countNumber) { return countNumber } 
        // return 0;
        
  };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.TotalCounter();
        const positive = this.PositiveCounter();
      

        return (
            <>
                <section className='FeedbackSection'>
                
                    <h1>Please leave feedback</h1>

                    <div className='BtnSet'>
                        <button className='BtnSetButton' onClick={() => this.OnGoodBtn()}>Good</button>
                        <button className='BtnSetButton' onClick={() => this.OnNeutralBtn()}>Neutral</button>
                        <button className='BtnSetButton' onClick={() => this.OnBadBtn()}>Bad</button>
                    </div>
                </section>

                <section className='StatisticSection'>
                    <h1>Statistics</h1>

                    <p className='StatisticText'>Good: {good}</p>
                    <p className='StatisticText'>Neutral: {neutral}</p>
                    <p className='StatisticText'>Bad: {bad}</p>
                    <p className='StatisticText'>Total: {total}</p>
                    <p className='StatisticText'>Positive feedback: {positive}%</p>
                </section>
            
                        </>
        )
    }
}
//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );

//     return (
//       <>
//         <h1>Состояние компонента</h1>

//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>

//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

export default App;