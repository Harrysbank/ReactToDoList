import { Fragment, useState } from "react";
import Form from "./component/Form";
import Shownlist from "./component/Shownlist";

function APP(){

  const [List, setList]=useState([]);


  const addToList=(inputvalue)=>{

    setList(previous=>{
      return([
        ...previous,
        {
          id: Math.random(),
          name: inputvalue,
        }
      ]);
    });
  };


  return (
    <Fragment>
      <Form addlist={addToList}></Form>
      <Shownlist List={List}/>
    </Fragment>
  );
}

export default APP;