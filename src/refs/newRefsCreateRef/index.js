import React from 'react'
import Button from './Button'
import Input from './Input'

class Ref extends React.Component {
    constructor(props) {
        super(props)
        // 初始化 获取挂载的组件Input实例
        this.inputComponentRef = React.createRef()
    }

    
    handleClick = () => {
        // 调用Input实例的方法
        if(this.inputComponentRef.current) this.inputComponentRef.current.focus()
    }

    render() {
        return (
            <div>
                <p>new实现方式：React.createRef()</p>
                <Button onClick={this.handleClick} />
                <Input ref={this.inputComponentRef} />
            </div>
        )
    }
}

export default Ref