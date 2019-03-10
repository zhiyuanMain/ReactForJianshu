import React from 'react'
import Button from './Button'
import Input from './Input'

class Ref extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        if(this.refs.inputRef) this.refs.inputRef.focus()
    }

    render() {
        return (
            <div>
                <p>old实现方式：this.refs.</p>
                <Button onClick={this.handleClick} />
                <Input ref="inputRef" />
            </div>
        )
    }
}

export default Ref