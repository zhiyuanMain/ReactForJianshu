import React from 'react'
import Button from './Button'
import Input from './Input'

class Ref extends React.Component {
    constructor(props) {
        super(props)
    }

    initInputComponentRef = (ele) => {
        this.inputComponentRef = ele
    }
    handleClick = () => {
        // 调用Input实例的方法
        if(this.inputComponentRef) this.inputComponentRef.focus()
    }

    render() {
        return (
            <div>
                <p>new实现方式：回调</p>
                <Button onClick={this.handleClick} />
                <Input ref={this.initInputComponentRef} />
            </div>
        )
    }
}

export default Ref