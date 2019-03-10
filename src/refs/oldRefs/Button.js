import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    
    focus = () => {
        this.props.onClick()
    }

    render() {
        return (
            <div className="block">
                <p>Button</p>
                <button
                    onClick={this.focus}
                >点击获取其他组件的焦点</button>
            </div>
        )
    }
}

export default Button