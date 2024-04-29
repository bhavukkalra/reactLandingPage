/*
Could have gone ahead with the regular approach of using 
attributes to pass the data to the component

<TabButton label='JSX'> 
(also valid) (Useful when multiple attributes needs to be passed)
*/

import './TabButton.css'
// Amazing styles to button styles

export default function TabButton({children}){
  /*
Advantage of defining the event listener inside a component 
is that they have access to the components prop and state
*/

  function handleClick() {
    console.log(`Clicked`);
  }

  // console.log(props)
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}