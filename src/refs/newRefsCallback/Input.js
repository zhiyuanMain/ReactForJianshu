import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // 不需要使用current调用
        this.inputRef && this.inputRef.focus();
    }

    initRef = (ele) => {
        // 组件加载时（或者更新时）自动触发该方法
        this.inputRef = ele
    }
    
    focus = () => {
        if(this.inputRef) this.inputRef.focus();
    }

    
    render() {
        return (
            <div className="block">
                <p>Input 加载时自动聚焦</p>
                <input ref={this.initRef} />
            </div>
        )
    }
}

export default Input