import EditLocation from "../Edit/editLocation";



function LocationDetails({loc}){
    
    return(
    <>
        <h1>Description</h1>
        <h5>{loc.desc}</h5>

        <EditLocation location={loc} />
    </>
    )

}

export default LocationDetails;