import styles from "./Listbox.module.css";

const SingleList=(props)=>{
    return (
        <div key={props.id}>
            <p className={styles['list-text']}>{props.name}</p>
        </div>
    );
};

export default SingleList;