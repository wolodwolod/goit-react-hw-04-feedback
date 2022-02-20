import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Section from 'components/Section'
import Notification from 'components/Notification'

function App () {
    
    const feedbacks = ['good', 'neutral', 'bad'];
    
    const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);      

    
    const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
    };
    
   const countTotal = () => {
   return good + neutral + bad;
    };
    
    const countPositiveRate = () => {
        
        return countTotal() > 0 ?
            Math.round((good * 100) / countTotal())
            : 0;             
  };       

        return (
            <>
                <Section className='FeedbackSection' title='Please leave feedback'>
                                    
                    <FeedbackOptions options={feedbacks} onLeaveFeedback={onLeaveFeedback} />
                    
                </Section>

                <Section className='StatisticSection' title='Statistics'>

                    {countTotal() > 0 ?

                        (<Statistics good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotal()}
                            positiveRate={countPositiveRate()} />
                        ) : (<Notification message="There is no feedback" />)}
                </Section>                           
                        </>
        )
    }
export default App;


    