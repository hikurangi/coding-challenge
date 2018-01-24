import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAvatar } from './actions';

class AvatarPicker extends Component {
    render() {
        return (
            <div>
                <div className="avatar">😎</div>
                <div className="btn">Choose an avatar</div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapActionsToProps = (dispatch) => {
    return {
        selectAvatar: (avatar) => {
            dispatch(changeAvatar(avatar));
        }
    };
};

export default connect(mapStateToProps, mapActionsToProps)(AvatarPicker);
