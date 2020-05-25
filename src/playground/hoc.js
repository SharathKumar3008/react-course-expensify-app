// Higher Order Component - HOC - A Component(HOC) that Renders another Component
//Reuse Code
//Render Hijacking
//Props Manipulation
//Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is my info : {props.info}</p>
    </div>
);

const adminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is an Sensitive Info. Please don't share this with anyone.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated 
                ?
                    <div>
                    <p>This is an authenticated Message</p>
                    <WrappedComponent {...props} />
                    </div>
                :
                    <p>The User is not Authenticated for this</p>
            }
        </div>
    );
}


const AdminInfo = adminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info={'These are my info'} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info={'These are my info'} />, document.getElementById('app'));

