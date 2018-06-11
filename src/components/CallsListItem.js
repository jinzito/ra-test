import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CallsListItem = ({onDelete, item}) => {
    const time = new Date(item.time);
    const currentTime = new Date();
    const isCompleted = currentTime > time;
    return (
        <Fragment>
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{time.getHours() + ":" + time.getMinutes()}</td>
                <td>
                    <input className="" type="checkbox" value="option1" disabled checked={isCompleted}/>
                </td>
                <td>
                    <button type="button" className="close" aria-label="Close" onClick={() => onDelete(item.id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </tr>
        </Fragment>
    );
}

CallsListItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    callItemVO: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    })
};

export default CallsListItem;




