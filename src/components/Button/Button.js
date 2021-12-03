import React, {memo} from 'react'

function Button(props) {
    const {children, ...restProp} = props;
   
    return (
        <button {...restProp} className="style_button">
            {children}
        </button>
    )
}

export default memo(Button);