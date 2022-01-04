import AirplaneSvg from '../../Assets/Plane.svg'

const Airplane = (props) => {
    return (
        <div className="Airplane" style={{ backgroundRepeat: 'no-repeat',
                                          backgroundSize:'auto', 
                                          width:100,position: 'relative',TextAlign: 'center',color: 'white' }} > 

                <img src={AirplaneSvg} style={{transform: `rotate(${props.transform}deg)`}}/>
                <div style={{
  position: 'absolute',
  fontSize: '18px',
  top: '33%',
  left: '33%',
   transform: `rotate(${props.transform+ 90}deg)`}}>{props.airplaneId}</div>
                
        </div>
    )
}

export default Airplane;