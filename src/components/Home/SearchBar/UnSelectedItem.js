import React from 'react'

export default function UnSelectedItem(props) {
    const {label, message} = props;
    return (
        <>
            <option value ="-1">
                {label}
            </option>
            <option value ="-2">
                {message}
            </option>
        </>
    )
}
