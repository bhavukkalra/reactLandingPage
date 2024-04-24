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

 function CoreConcept({image, title, description}) {
   return (
     <li>
       <img src={image} alt="Components image" />
       <h3>{title}</h3>
       <p>{description}</p>
     </li>
   );
 }


function CustomComponent(props){
  // console.log(`Input is - ${priority}`);
  const {priority} = props;
  console.log(`priority - ${priority}`)

  console.log(props)
  return (
    <p>This is something</p>
  )
}

function App() {
  return (
    <div>
      <Header>This is text inside header</Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />

            <CustomComponent priority={5}/>

          {/* <CoreConcept singleJson={CORE_CONCEPTS[2]} /> (function ({...coreConcept})) */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
