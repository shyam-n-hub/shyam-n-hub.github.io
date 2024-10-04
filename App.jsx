// import { LearnComponents } from "./Components/LearnComponents";
// import { Student } from "./Components/Student";
// import { MultiTypeComponent } from "./Components/MultiTypeComponent";
import {Function} from "./Components/Function";
import "./index.css";
function App() {
  
  function handClick() {
    alert("Button clicked!")
  }
  // const items=[ {id:1,name:"item 1"},
  //               {id:2,name:"item 2"},
  //               {id:3,name:"item 3"},

  // ];
  return ( 
  <>
    {
       
       <Function handClick={handClick}/>
   
    }



    {/* {
      <>
      <Student name ="Shyam" age={20} isMarried={false}/>
      <Student name ="Par" age={20} isMarried={true}/>
      <Student name ="Mugilan" age={20} isMarried={true}/>
      <Student />

      </>
  

} */}

  {/* <MultiTypeComponent value="HELLO"/>
  <MultiTypeComponent value={30}/>
  <MultiTypeComponent value={true}/> */}
  
 
   
   
  </>
  );

  
} 

export default App;
