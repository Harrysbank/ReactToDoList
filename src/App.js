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

  const removeList=(id)=>{
    setList(previous=>{
      const List=[...previous];
      const newList=List.filter(list=>list.id!==id);
      return newList;
    });
  };

  return (
    <Fragment>
      <Form addlist={addToList}></Form>
      <Shownlist removeList={removeList} List={List}/>
    </Fragment>
  );
}

export default APP;