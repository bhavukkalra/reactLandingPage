
/*
- props are gonna be passed from HTML to here. (Custom attributes used)

- props are set by React. As its the React workflow to call these custom components, when 
these components are used 

- attributes set by the user while using the component. Will be sent to the component function
by React

*/

/*


props could be destructured

props -- {
  image: [],
  title: [],
  description: []

}

{image, title, description} or use
props.image, props.title, props.description

*/

import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CustomComponent from './components/CustomConcept/CutomComponent'
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';

/*
Usestate usage

1. Must be used in a component
2. Must be defined at inside the component
3. Must not be defined inside a nested function in the component except when 
using inside custom hooks 

*/


function App() {

  console.log("APP COMPONENT RENDERING")
  /*
        Here just re-assigning the varibale to a new value everytime won't work.

     As react only renders each component once by default, 
    To re-render a component we need to introduce state


    */
  // let dynamicContentVaribale = "Imagine an explanation of a component here";
  let [selectedTopic, setSelectedTopic] = useState();
  // () => undefined state by defauly



  function handleSelect(section) {
    console.log(`Pressed - ${section}`);
    // dynamicContentVaribale = section;
      setSelectedTopic(section);

    // console.log(`This is selected`);
  }

  return (
    <div>
      <Header>This is text inside header</Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />

            <CustomComponent priority={5}>
              <p>this is inside p</p>

              <p>
                <a href="inside p">inside p a</a>
              </p>
              <a href="#">This is inside anchor</a>
            </CustomComponent>

            {/* <CoreConcept singleJson={CORE_CONCEPTS[2]} /> (function ({...coreConcept})) */}
          </ul>
        </section>
        <h2>Time to get started!</h2>

        <section id="examples">
          {/* 

<TabButton onSelect={handleSelect}>Components</TabButton>
<TabButton onSelect={handleSelect()}>Components</TabButton> Wrong 

As this will get executed as soon as the component gets rendered

Can't pass in custom values to the function defintation 


To pass in cutom values without the function getting executed


wrap the function inside an anonymous function


<TabButton onSelect={() => handleSelect('jsx')}>Components</TabButton>

OR

<TabButton onSelect={function() {handleSelect('jsx')}}>Components</TabButton>






*/}

          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton
              onSelect={function () {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : <p>Please select some topic to show </p>}
        </section>
      </main>
    </div>
  );
}

export default App;
