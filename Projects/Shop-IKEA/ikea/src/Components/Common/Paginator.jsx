import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paginator extends Component {
    render() {
        return (
            <div className="row space-top">
                <div className="col-md-12">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <Link className="page-link" to="#">«</Link>
                        </li>
                        <li className="page-item active">
                            <Link className="page-link" to="#">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">4</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">5</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">»</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Paginator