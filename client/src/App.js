import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
const uuidv4 = require('uuid/v4');
class App extends Component {
    constructor(){
        super();
        this.state ={
            items: []
        };
        this.handleInsert = this.handleInsert.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    async CallApi(url, method, input){
        let res = '';
        if(method === 'GET'){
            res = await fetch(url);
        }else{
            res = await fetch(url,{
                method : method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(input)
            });
        }
        const body = await res.json();
        if(res.status !== 200) return body.messageerror;
        return body;
    }
    componentDidMount() {
        this.CallApi('/todos', 'GET', null)
            .then(res => this.setState({items: res.items}))
            .catch(err => console.log(err))
    }

    handleInsert(event){
        if(event.key === 'Enter'){
            let todo = event.target.value;
            let item = {
                id : uuidv4(),
                title : todo,
                completed : false
            };
            this.CallApi('/todos','POST', item)
                .then(res => this.setState({items: res.items}))
                .catch(err => console.log(err));
            event.target.value = '';
            event.preventDefault();
        }
    }

    handleDelete(id){
        this.CallApi('/todos/'+id, 'DELETE', this.state.items)
            .then(res=>this.setState({items : res.items}))
            .catch(err=>console.log(err));
    }

    render() {
        let todoList = this.state.items;
        let tasks = todoList.map((value, index)=>{
           return <Todo
               title={value.title}
               key={index}
               onClickDelete={()=>this.handleDelete(value.id)}
           />;
        });
        return (
            <div className="App">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <input
                            type="text"
                            placeholder="Enter Todo ..."
                            className="form-control"
                            onKeyPress={this.handleInsert}
                        />
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {tasks}
                        </ul>
                    </div>
                    <div className="panel-footer">

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
