import { useParams, Link } from "react-router-dom";

const ColorPage = ({colors}) => {
    const {name} = useParams();
    return(
        <div style={{backgroundColor:name, height:'100em'}}>
            <h1 style={{color:'white'}}>{name}</h1>
            <h3><Link to={'/colors'}>Return Home</Link></h3>
        </div>
    )
}

export default ColorPage;