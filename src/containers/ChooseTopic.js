import React, { Component } from 'react';

class ChooseTopic extends Component {
    render () {
        return (
        <div className="choose-topic">
            <h2>Choose one of the following Topics for your Playlist:</h2>
            <div className="topic-list">
                <div className="topic-list-item">
                    <a href="#"><i class="fas fa-dumbbell"></i><span>TRAINING</span></a>
                </div>
                <div className="topic-list-item">
                    <a href="#"><i class="fas fa-keyboard"></i><span>CODING</span></a>
                </div>
                <div className="topic-list-item">
                    <a href="#"><i class="fas fa-car"></i><span>DRIVING</span></a>
                </div>
            </div>
        </div>
        )
    }

} export default ChooseTopic;
