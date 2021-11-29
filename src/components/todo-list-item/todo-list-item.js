import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onClickSpan = () => {
        this.setState((state) => {
                return {
                    done: !state.done
                }
            }
        )
    }
    onClickImportants = () => {
        this.setState((state) => {
                return {
                    important: !state.important
                }
            }
        )
    }

    render() {


        const {label} = this.props;
        const {done, important} = this.state;
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
          onClick={this.onClickSpan}

      >
        {label}

      </span>

      <button type="button"
              className={classNameButoon}
              onClick={this.onClickImportants}
      >
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );
    }

};


