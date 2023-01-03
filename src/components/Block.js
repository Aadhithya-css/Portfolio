import "./Block.css"

function block(props){
    return(
        <div class="container">
            <a href={props.link}><img src={props.image} /></a>
        </div>
    );
}

export default block;