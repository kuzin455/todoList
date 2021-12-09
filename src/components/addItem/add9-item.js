import React, {Component} from 'react';
import './addItem.css'

export default class AddItem extends Component {


    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };


    render() {


        return (
            <form className='container'
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control add-input"
                       onChange={this.onLabelChange}
                       placeholder="add task"
                       value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary "
                >Add item
                </button>
            </form>
        )
    };
};
