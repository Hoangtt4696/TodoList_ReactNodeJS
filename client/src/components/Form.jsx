import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Save</button>
                    </span>
                </div>
            </form>
        );
    }
}
export default Form;
