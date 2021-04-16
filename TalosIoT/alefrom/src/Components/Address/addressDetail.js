import Table from 'react-bootstrap/Table'

function AddressDetail({address}) {

    return(
        <div>
        <h4>Details</h4>
        <Table striped bordered hover>
            <tbody>
            <tr>
                <th>Description</th>
                <td>{address.desc}</td>
            </tr>
            <tr>
                <th>Street</th>
                <td>{address.street}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{address.city}</td>
            </tr>
            <tr>
                <th>State</th>
                <td>{address.state}</td>
            </tr>
            <tr>
                <th>PostCode</th>
                <td>{address.postcode}</td>
            </tr></tbody>
        </Table></div>
    )
}

export default AddressDetail;