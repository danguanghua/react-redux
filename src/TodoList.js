import React, {Component} from 'react';
import {connect} from 'react-redux';
class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                value={this.props.inputValue} 
                onChange = {this.props.inputChange}/>
                <button onClick={this.props.clickButton}>提交</button>
                <ul>
                    {this.props.list.map((item, index) => {
                        // console.log(index);
                        return (<li key = {index}  value = {index}
                            onClick = {
                                this.props.deleteItem
                            }
                            >{item}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        inputValue : state.inputValue,
        list : state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            // console.log(e.target.value);
            let action = {
                type : 'change_input',
                value : e.target.value
            }
            dispatch(action);
        },
        clickButton() {
            // console.log(11111);
            let action = {
                type : 'add_item'
            }
            dispatch(action);
        },
        deleteItem(e) {
            console.log(e.target.value)
            let action = {
                type : 'delete_item',
                index : e.target.value
            }
            dispatch(action);
        }
    }
}

export default connect(stateToProps, dispatchToProps) (TodoList);