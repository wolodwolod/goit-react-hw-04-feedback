import React, { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Section from 'components/Section'
import Notification from 'components/Notification'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }


    onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
    };
    
   countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };
    
    countPositiveRate = () => {
        const { good } = this.state;
        const total = this.countTotal();
        const countNumber = Math.round((good * 100) / total);
        
        return total > 0 ? countNumber : 0;
                
  };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotal();
        const positiveRate = this.countPositiveRate();
      

        return (
            <>
                <Section className='FeedbackSection' title='Please leave feedback'>
                                    
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
                    
                </Section>

                <Section className='StatisticSection' title='Statistics'>

                    {total > 0 ?

                        (<Statistics good={good} neutral={neutral} bad={bad} total={total} positiveRate={positiveRate} />
                        ) : (<Notification message="There is no feedback" />)}
                </Section>
                
                
            
                        </>
        )
    }
}

export default App;


    