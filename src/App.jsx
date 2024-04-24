
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
import Header from './components/Header';


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

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
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
