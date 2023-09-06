import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Feedbackform from './components/Feedbackform';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';
 
const App = () => {

  return (
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="container">
    <Routes>
    <Route exact path="/" element={
      <>
      <Feedbackform />
      <FeedbackStats />
      <FeedbackList />
      </>
    } >
    </Route>
    <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
    <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App