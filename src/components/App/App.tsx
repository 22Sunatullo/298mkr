import React from 'react';
import Header from '../Header/Header';
import ResidentalComplex from '../ResidentalComplex/ResidentalComplex';
import { HasUp } from '../HasUp/HasUp';
import AboutComplex from '../AboutComplex/AboutComplex';
function App() {
  return (
    <div className="App">
      <Header/>
      <ResidentalComplex/>
      <HasUp/>
      <AboutComplex/>
    </div>
  );
}

export default App;
