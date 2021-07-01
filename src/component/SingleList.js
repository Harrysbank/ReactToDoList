import styles from "./Listbox.module.css";

const SingleList=(props)=>{

    const id=props.id;

    const ontextHandler=()=>{
        props.removeList(id);
    }
    return (
        <div key={props.id}>
            <p onClick={ontextHandler} className={styles['list-text']}>{props.name}</p>
        </div>
    );
};

export default SingleList;