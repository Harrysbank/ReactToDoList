import SingleList from "./SingleList";
import styles from "./Listbox.module.css";

const Shownlist=(props)=>{
    const List=props.List.map(list=><SingleList name={list.name} key={list.id}/>);
    return (
        <div className={styles['list-container']}>
            {List}
        </div>
    );
}

export default Shownlist;