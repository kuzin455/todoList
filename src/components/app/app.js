import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from "../addItem/add9-item";
import './app.css';


export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createItem("Make Awesome App"),
            this.createItem("Have a lunch"),
            this.createItem("text"),
        ],
        term: '',
        filter: 'all',
    };

    createItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++,
            done: false,
        };
    }

    deletItem = (id) => {

        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            console.log(idx)
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const NewItem = this.createItem(text);

        this.setState(({todoData}) => {

            const newArray = [

                ...todoData,
                NewItem,
            ];
            return {
                todoData: newArray
            };
        });
    };

    onDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });

    };
    onImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });

    };
    onSearch = (term) => {
        this.setState({term})
    };
    onFilter = (filter) => {
        this.setState({filter})
    };
     search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;

        }
    }


    render() {
        const {todoData, term, filter} = this.state;
        const vvisibleItems = this.filter(
            this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilter={this.onFilter}/>
                </div>

                <TodoList todos={vvisibleItems}
                          onDelet={this.deletItem}
                          onDone={this.onDone}
                          onImportant={this.onImportant}

                />
                <AddItem onItemAdded={this.addItem}
                />

            </div>
        );
    }
};

