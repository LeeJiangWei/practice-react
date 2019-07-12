import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.lastName() + faker.name.findName()}
                    time={faker.date.past().toLocaleDateString()}
                    content={faker.lorem.sentences()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.lastName() + faker.name.findName()}
                    time={faker.date.past().toLocaleDateString()}
                    content={faker.lorem.sentences()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.lastName() + faker.name.findName()}
                    time={faker.date.past().toISOString()}
                    content={faker.lorem.sentences()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));