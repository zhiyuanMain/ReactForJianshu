import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.focus();
    }
    

    focus = () => {
        if(this.refs.inputEle) this.refs.inputEle.focus();
    }

    
    render() {
        return (
            <div className="block">
                <p>Input 加载时自动聚焦</p>
                <input ref="inputEle" />
            </div>
        )
    }
}

export default Input