import { useParams } from "react-router-dom";

const ColorPage = ({colors}) => {
    const {name} = useParams();
    return(
        <div style={{backgroundColor:name}}>
            <h1 style={{color:'white'}}>{name}</h1>
        </div>
    )
}

export default ColorPage;