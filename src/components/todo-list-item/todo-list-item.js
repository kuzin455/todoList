import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {


        const {label, onDone, onImportant, done, important} = this.props;
        let classNames = "todo-list-item";
        let classNameButoon = "btn btn-outline-success btn-sm float-right "
        if (done) {
            classNames += " done";
        }
        if (important) {
            classNames += " important"
        }
        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label  "
          onClick={onDone}
      >

        {label}

      </span>

      <button type="button"
              className={classNameButoon}
              onClick={onImportant}
      >
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={this.props.onDelet}>
        <i className="fa fa-trash-o "/>
      </button>
    </span>
        );
    }

};


