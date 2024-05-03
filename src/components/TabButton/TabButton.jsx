/*
Could have gone ahead with the regular approach of using 
attributes to pass the data to the component

<TabButton label='JSX'> 
(also valid) (Useful when multiple attributes needs to be passed)
*/

import './TabButton.css'
// Amazing styles to button styles

export default function TabButton({children, onSelect, isSelected}){
  console.log("TAB COMPONENT RENDERING")

  /*
Advantage of defining the event listener inside a component 
is that they have access to the components prop and state


onClick as a function is defined in reactt only for preDefined components
i.e regular html tags not for custom components
<li></li> => Also a react pre-defined component

*/

  // console.log(props)
  return (
    <li>
      <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}