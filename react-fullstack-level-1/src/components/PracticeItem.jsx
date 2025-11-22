function PracticeItem(props){
    return(
        <li>
            <strong>{props.title}</strong> - {props.status}
        </li>
    );
}

export default PracticeItem;