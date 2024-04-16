import {CORE_CONCEPTS} from './data'

/*
Different between using class and extending component from react and 
using functions to render components?

Note - <img /> is a self closing tag
*/

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

/*
{} => Cannot contain for, if else, while loops. Only expression that produce a result
*/


/*
Q/A

Image files when imported like this - 
src="src/assets/react-core-concepts.png"

might be ignored by the bundling process i.e production build.
(Even tho they look fine in dev)

So the best way to use them is to (import them)

import reactAtom from './path/to/atom/image'

*/

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  console.log(description)


  return (
    <header>
      <img src={CORE_CONCEPTS[0].image} alt="Stylized atom"></img>
      <h1>React Essentials</h1>
      <p>
        {description}  React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

/*
<Header/> or <Header></Header>
Both acceptable
*/

/*
- props are gonna be passed from HTML to here. (Custom attributes used)

- props are set by React. As its the React workflow to call these custom components, when 
these components are used 

- attributes set by the user while using the component. Will be sent to the component function
by React

*/


 function CoreConcept(props) {
   return (
     <li>
       <img src={props.img} alt="Components image" />
       <h3>{props.title}</h3>
       <p>{props.description}</p>
     </li>
   );
 }


function App() {
  return (
    <div>
      <Header>This is text inside header</Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
