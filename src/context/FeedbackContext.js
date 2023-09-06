import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'this is a test from context',
            rating:10
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
    })
    
  const deleteFeedback = (id) => {
    console.log('App', id);
    if(window.confirm('Are you sure you want to delete the review?')){
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback ]);
  }

  //Item to be edited
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  //Update feedback item

  const updateFeedback = (id, updItem) =>{
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback}}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;