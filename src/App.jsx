/*
Q/A importing an Image file to react project, Handled by the build process
*/

import reactImg from './assets/react-core-concepts.png'

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
      <img src={reactImg} alt="Stylized atom"></img>
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

function App() {
  return (
    <div>
      <Header>This is text inside header</Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
