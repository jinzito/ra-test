import React, {Component} from "react";
import Pod from "./Pod";

class TableList extends Component {
    render() {
        const thArray = ["Name", "Phone number", "Time"];
        const tdArray = [
            ["Dakota Rice", "+23423436,738", "12:45"],
            ["Minerva Hooper", "+342323,789", "15:44"],
            ["Sage Rodriguez", "+23423456,142", "16:00"],
            ["Philip Chaney", "+342338,735", "18:00"],
            ["Doris Greene", "+23423463,542", "22:20"],
            ["Mason Porter", "+34242378,615", "20:50"]
        ];

        return (
            <Pod>
                <div className="btn-toolbar d-flex justify-content-between my-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon">search</div>
                        </div>
                        <input type="text" className="form-control" placeholder=""
                               aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    </div>

                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-outline-secondary active">
                            <input type="radio" name="options" id="option1"/>All
                        </label>
                        <label class="btn btn-outline-secondary">
                            <input type="radio" name="options" id="option2"/> Next
                        </label>
                        <label class="btn btn-outline-secondary">
                            <input type="radio" name="options" id="option2"/> Finished
                        </label>
                    </div>
                </div>

                <table className="table-sm table-hover table-striped w-100">
                    <thead>
                    {thArray.map((prop, key) => {
                        return (
                            <th className="c-pointer" key={key} scope="col" role="button">
                                <p>{prop}
                                    <i className="down mx-2 mt-1 float-right"></i>
                                </p>
                            </th>
                        );
                    })}
                    <th/>
                    <th/>
                    </thead>
                    <tbody className="table-striped">
                    {tdArray.map((prop, key) => {
                        return (
                            <tr key={key}>
                                {prop.map((prop, key) => {
                                    return <td key={key}>{prop}</td>;
                                })}
                                <td>
                                    <input className="" type="checkbox" value="option1" disabled checked/>
                                </td>
                                <td>
                                    <button type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Pod>
        )
    }
}

export default TableList;