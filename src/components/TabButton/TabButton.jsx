/*
Could have gone ahead with the regular approach of using 
attributes to pass the data to the component

<TabButton label='JSX'> 
(also valid) (Useful when multiple attributes needs to be passed)
*/

import './TabButton.css'
// Amazing styles to button styles

export default function TabButton({children}){

  
    // console.log(props)
    return (
      <li>
        <button>{children}</button>
      </li>
    )
}