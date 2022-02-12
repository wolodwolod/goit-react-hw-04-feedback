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
   

    render() {
        const { good, neutral, bad } = this.state;


        return (
            <>
                <section className='FeedbackSection'>
                
                    <h1>Please leave feedback</h1>

                    <div className='BtnSet'>
                        <button className='BtnSetBtn' onClick={() => this.OnGoodBtn()}>Good</button>
                        <button className='BtnSetBtn' onClick={() => this.OnNeutralBtn()}>Neutral</button>
                        <button className='BtnSetBtn' onClick={() => this.OnBadBtn()}>Bad</button>
                    </div>
                </section>

                <section className='StatisticSection'>
                    <h1>Please leave feedback</h1>

                    <p className='StatisticText'>Good: {good}</p>
                    <p className='StatisticText'>Neutral: {neutral}</p>
                    <p className='StatisticText'>Bad: {bad}</p>
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