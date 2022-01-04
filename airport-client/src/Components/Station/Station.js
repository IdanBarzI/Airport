import "./Station.css";

const Station = (props) => {
    return (
        <div className="Station" style={{ backgroundRepeat: 'no-repeat',
                                          backgroundSize:'auto', 
                                          width:props.width,
                                          height:props.height }} > 
                                          <h1>
                                              Station-{props.stationId}
                                          </h1>
            {props.children}
        </div>
    )
}

export default Station;