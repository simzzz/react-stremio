import React, { Component } from 'react';
import Item from './item';

class Row extends Component {
    // Returns array so we can directly call it inside our <ul> in render 
    // We can access rows thanks to applying the redux state to the RowsList container and passing the rows here
    renderList() {
        return this.props.rows.map((row) => {
            return (
                <div key={row.type} className="row"> 
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{row.type}</h1>
                            <p className="lead"><Item items={row.items} /></p>
                        </div>
                    </div>                                       
                </div>
            );
        });
    }

    render() {
        return (
            this.renderList()
        );
    }
};

export default Row;