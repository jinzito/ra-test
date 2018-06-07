import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CallsListItem = ({onDelete, callItemVO}) => (
    <Fragment>
        <tr key={callItemVO.id}>
            <td>{callItemVO.name}</td>
            <td>{callItemVO.phone}</td>
            <td>{callItemVO.time.getHours() + ":" + callItemVO.time.getMinutes()}</td>
            <td>
                <input className="" type="checkbox" value="option1" disabled checked/>
            </td>
            <td>
                <button type="button" className="close" aria-label="Close" onClick={onDelete}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>
        </tr>
    </Fragment>
);

CallsListItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    callItemVO: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        time: PropTypes.instanceOf(Date)
    })
};

export default CallsListItem;




