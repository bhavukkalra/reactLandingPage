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

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  console.log(description)


  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom"></img>
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
