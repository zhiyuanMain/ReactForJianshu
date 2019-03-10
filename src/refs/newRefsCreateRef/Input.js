import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)
        // 在构造方法内初始化
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        // 使用current调用
        this.inputRef.current.focus();
    }
    
    focus = () => {
        if(this.inputRef.current) this.inputRef.current.focus();
    }

    
    render() {
        return (
            <div className="block">
                <p>Input 加载时自动聚焦</p>
                <input ref={this.inputRef} />
            </div>
        )
    }
}

export default Input