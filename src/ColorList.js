import {Link} from 'react-router-dom';

const ColorList = ({name}) => {
    return(
        <div style={{backgroundColor:name}}>
            <h1><Link to={`colors/${name}`}>{name.toUpperCase()}</Link></h1>
        </div>
    )
}

export default ColorList;