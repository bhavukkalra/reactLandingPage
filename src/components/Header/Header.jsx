/*
Different between using class and extending component from react and 
using functions to render components?

Note - <img /> is a self closing tag
*/

/*
{} => Cannot contain for, if else, while loops. Only expression that produce a result
*/


/*
<Header/> or <Header></Header>
Both acceptable
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


import reactImg from "../../assets/react-core-concepts.png";

/*
These css files aren't scoped to only this component.
i.e if <header><header/>

is used somewhere else in the component. It will be applied to it as well.

i.e these css imports inside components are actually global scope

Solution later on how these styles can be scoped later


*/

import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    console.log(description)
  
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom"></img>
        <h1>React Essentials</h1>
        <p>
          {description}  React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }