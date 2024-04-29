export default function CustomComponent(props){

    return propsProcessor(props);
    // // console.log(`Input is - ${priority}`);
    // const {priority} = props;
    // console.log(`priority - ${priority}`)
    // console.log(`Print contents of p  ${props.children[0]}`)
    // console.log(props.children[0])

    // console.log(props.children[0].type)
    // console.log(props)
    // return (
    //   <p>This is something</p>
    // )
  }


function propsProcessor({priority, children}){
  console.log(`Processor logs`)
  console.log(priority)
  console.log(children)

  return (
    <div>
      <h2>{priority}</h2>
      {children}


    </div>
  )

}