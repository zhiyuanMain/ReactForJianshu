import React from 'react'
import HybridInput from './HybridInput'

class Hybrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: 'hello world'
        }
    }

    handleChange = (resValue) => {
        this.setState({
            textValue: resValue
        })
    }

    handleClick = () => {
        this.setState({
            textValue: Math.floor(Math.random() * 100)
        })
    }

    render() {
        const { textValue } = this.state
        return (
            <div>
                <p>
                    组件外部{textValue}
                    <button onClick={this.handleClick}>变为随机数字</button>
                </p>
                
                <HybridInput defaultValue={textValue} onChange={this.handleChange} />
            </div>
        )
    }
    
}

export default Hybrid