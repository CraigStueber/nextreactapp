
import Table from "react-bootstrap/Table"

function EquipmentTable({equip}){

    return(
        <Table striped bordered hover>
            <tbody>
            <tr>
                <th colSpan="2">Description</th>
                
            </tr>
            <tr>
                <td colSpan="2">{equip.desc}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{equip.type}</td>
            </tr>
            <tr>
                <th>Make</th>
                <td>{equip.make}</td>
            </tr>
            <tr>
                <th>Model</th>
                <td>{equip.model}</td>
            </tr>
            <tr>
                <th>Serial Number</th>
                <td>{equip.serial}</td>
            </tr>
            <tr>
                <th>Latitude</th>
                <td>{equip.lat}</td>
            </tr>
            <tr>
                <th>Longitude</th>
                <td>{equip.lng}</td>
            </tr>
            <tr>
                <th>EID</th>
                <td>{equip.eid}</td>
            </tr>
            </tbody>

        </Table>
    )

}

export default EquipmentTable;