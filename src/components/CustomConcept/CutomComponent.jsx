export default function CustomComponent(props){
    // console.log(`Input is - ${priority}`);
    const {priority} = props;
    console.log(`priority - ${priority}`)
  
    console.log(props)
    return (
      <p>This is something</p>
    )
  }