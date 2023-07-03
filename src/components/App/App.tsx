import React from 'react';
import Header from '../Header/Header';
import ResidentalComplex from '../ResidentalComplex/ResidentalComplex';
import { HasUp } from '../HasUp/HasUp';
import AboutComplex from '../AboutComplex/AboutComplex';
import { Wrapper } from '../Wrapper/Wraper';
import OurAdvantages from '../OurAdvantages/OurAdvantages';
import GeneralLoyaut from '../GeneralLoyaut/GeneralLoyaut';
import { Apartments } from '../Apartments/Apartments';
import { Gallery } from '../Gallery/Gallery';
import { StagesOfConstruction } from '../StagesOfConstruction/StagesOfConstruction';
import { Footter } from '../Footter/Footter';
import { ByDeveloped } from '../ByDeveloped/ByDeveloped';
import { Infrastructure } from '../Infrastructure/Infrastructure';


function App() {
  return (
    <div className="App">
      <Header />
      <ResidentalComplex />
      <HasUp />
      <AboutComplex />
      <Wrapper>
        <OurAdvantages />
        <Infrastructure/>
        <GeneralLoyaut />
        <Apartments />
        <Gallery />
        <StagesOfConstruction />
      </Wrapper>
      <Footter/>
      <ByDeveloped/>
    </div>
  );
}


export default App;
