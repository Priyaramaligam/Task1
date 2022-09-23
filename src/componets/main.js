
function Main(props) {
    return (

      
            <div className="Full-Content">
                <div className="img-content">
                <img src={props.image} className="North-food" />
                </div>
                <div className="Main-content">
                    {props.content}
                </div>
            </div>
            
            
            
        
    );
}
export default Main;