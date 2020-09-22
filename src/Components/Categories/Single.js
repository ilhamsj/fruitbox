import React from 'react'

const Single = (props) => {
    return (
        <tr>
            <td>{ props.data.name }</td>
            <td>Status report</td>
            <td>Office</td>
            <td>Price</td>
            <td>{ props.data.created_at }</td>
            <td>Gross amount</td>
        </tr>
    )
}

export default Single
