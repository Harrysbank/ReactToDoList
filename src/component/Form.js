import style from "./Form.module.css";
import { useRef } from "react";

const Form =(props)=>{

    const inputRef=useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const inputvalue=inputRef.current.value;
        if(inputvalue.trim().length!==0){
            props.addlist(inputvalue);
            inputRef.current.value="";
            
        }
    };

    return (
        <div className={style.form}>
            <form onSubmit={submitHandler}>
                <label htmlFor="goal">What you want to do</label>
                <input  ref={ inputRef } className={style.input} id="goal" type="text"></input>
                <button className={style.button} type="submit">Add this</button>
            </form>
        </div>
    );
}

export default Form;