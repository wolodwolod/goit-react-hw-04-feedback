import React, { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Section from 'components/Section'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

//     OnGoodBtn = () => {

//         console.log("OnGood")
        
//     this.setState (prevState => ({
//       good: prevState.good + 1
//     }));
//     };
    
//     OnNeutralBtn = () => {
//        this.setState (prevState => ({
//       neutral: prevState.neutral + 1
//     }));
//     };
    
//     OnBadBtn = () => {
//         this.setState (prevState => ({
//       bad: prevState.bad + 1
//     }));
//   };
    
    onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
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
        const positivePercentage = this.PositiveCounter();
      

        return (
            <>
                <Section className='FeedbackSection' title='Please leave feedback'>
                                    
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
                    
                </Section>

                <Section className='StatisticSection' title='Statistics'>
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
                </Section>
                
                
            
                        </>
        )
    }
}

export default App;
    //  <div className='BtnSet'>
    //                     <button className='BtnSetButton' onClick={() => this.OnGoodBtn()}>Good</button>
    //                     <button className='BtnSetButton' onClick={() => this.OnNeutralBtn()}>Neutral</button>
    //                     <button className='BtnSetButton' onClick={() => this.OnBadBtn()}>Bad</button>
    //                 </div>
// section className='StatisticSection'>
//                     <h1>Statistics</h1>

//                     <p className='StatisticText'>Good: {good}</p>
//                     <p className='StatisticText'>Neutral: {neutral}</p>
//                     <p className='StatisticText'>Bad: {bad}</p>
//                     <p className='StatisticText'>Total: {total}</p>
//                     <p className='StatisticText'>Positive feedback: {positive}%</p>
//                 </section>


