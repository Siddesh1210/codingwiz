function Structure(props)
{
    return(
        <div className="show-detail">
            <p>Name : {props.name}.</p>
            <p>Phone Number : {props.p_no}</p>
            <p>Course : {props.course}.</p>
            <p>Query : {props.query}.</p>
        </div>
    );
}

export default Structure;