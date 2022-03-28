import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Section from 'components/Section'
import Notification from 'components/Notification'

const feedbacks = ['good', 'neutral', 'bad'];


function App() {

    const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
    })    
      
  const onLeaveFeedback = feedback => {
   
    setFeedback(prev => {

      return {
        ...prev,
        [feedback]: prev[feedback] + 1,
      }
            })
  }


  
  // const onLeaveFeedback = feedback => {
  //   switch (feedback) {
  //     case 'good':
  //       setFeedback(prev => {
  //         return {
  //           ...prev,
  //           good: prev.good + 1,
  //         }
  //       })
  //       break;

  //     case 'neutral':
  //       setFeedback(prev => {
  //         return {
  //           ...prev,
  //           neutral: prev.neutral + 1,
  //         }
  //       })
  //       break;

  //     case 'bad':
  //       setFeedback(prev => {
  //         return {
  //           ...prev,
  //           bad: prev.bad + 1
  //         }
  //       })
  //       break;

  //     default:
  //       break;
  //   }
  // }
  //   ;
    
   const countTotal = () => {
   return feedback.good + feedback.neutral + feedback.bad;
    };
    
    const countPositiveRate = () => {
        
        return countTotal() > 0 ?
            Math.round((feedback.good * 100) / countTotal())
            : 0;             
  };       

        return (
            <>
                <Section className='FeedbackSection' title='Please leave feedback'>
                                    
                    <FeedbackOptions options={feedbacks} onLeaveFeedback={onLeaveFeedback} />
                    
                </Section>

                <Section className='StatisticSection' title='Statistics'>

                    {countTotal() > 0 ?

                        (<Statistics good={feedback.good}
                            neutral={feedback.neutral}
                            bad={feedback.bad}
                            total={countTotal()}
                            positiveRate={countPositiveRate()} />
                        ) : (<Notification message="There is no feedback" />)}
                </Section>                           
                        </>
        )
    }
export default App;


    