import React from 'react';

interface Props {
    message: string;
    author: string;
}

const Message: React.FC<Props> = ({message, author}) => {
    return (
        <div>
            <span>{author}</span>
            <p>{message}</p>
        </div>
    );
};

export default Message;