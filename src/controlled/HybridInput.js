import React from 'react'

class HybridInput extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            value: props.defaultValue || ''
        }
    }


    get displayValue() {
        const propKey = 'defaultValue'
        const internalKey = 'value'
        return this.props[propKey] || this.state[internalKey]
    }

    componentWillReceiveProps(nextProps) {
        const controlledValue = nextProps.defaultValue;

        if (controlledValue !== undefined && controlledValue !== this.state.value) {
            this.setState({
                value: controlledValue
            }, () => {
                this.props.onChange && this.props.onChange(controlledValue);
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 优化
        // 当组件的props有改变时才触发render
        if (nextProps.defaultValue !== undefined) {
            // controlled, use `props.defaultValue`
            return nextProps.defaultValue !== this.props.defaultValue;
        }

        // uncontrolled, use `state.value`
        // 当state改变时 并不重新渲染
        return nextState.value !== this.state.value;
    }
    

    handleChange = (event) => {
        const newVal = event.target.value
        if (newVal === this.state.value) {
            return;
        }

        this.setState({
            value: newVal
        }, () => {
            this.props.onChange && this.props.onChange(newVal);
        });
    }

    render() {
        return (
            <div className="block">
                <p>组件内部</p>
                <input
                    value={this.displayValue}
                    type="text"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default HybridInput