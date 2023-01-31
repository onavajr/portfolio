import React,{useState} from "react";

const Project = (props) => {
    const [likes, setLikes] = useState(0);
    const [title, setTitle] = useState(props.title);

    const addLikes = (event) => {
        console.log("adding a like: " + likes);
        setLikes(likes + 1);
    }
    return (
        <div className="projectClass">
            <h4>{props.title}</h4>
            <button onClick={(event) => addLikes(event)}>Like Project</button>
            <p>Likes: { likes }</p>
            <p>Description:</p>
            <p>{props.description}</p>
            <input type = "text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
    )
}

export default Project;