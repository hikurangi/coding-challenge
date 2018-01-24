import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default AvatarPicker;
