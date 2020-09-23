import React from 'react'

const Single = (props) => {
    return (
        <tr>
            <td>{ props.data.name }</td>
            <td>{ props.data.created_at }</td>
        </tr>
    )
}

export default Single
