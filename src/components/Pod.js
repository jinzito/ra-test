import React, {Component} from "react";

class Pod extends Component {
    render() {
        return (
            <div className="card mx-4 my-4">
                <div className="card-body">
                    {this.props.title ? <h5 className="card-title">{this.props.title}</h5> : null}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Pod;