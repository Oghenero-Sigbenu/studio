import React from 'react';
import Input from './Common/Input';
import Label from './Common/Label';
import Form from './Common/Form';

const Login = () => {
    return (
        <>
            <Form>
            <h2>Login</h2>
            <form>
                <Label>
                <label>Email:</label><br />
                </Label>
                <Input>
                <input type='text' />
                </Input>
                <br />
                <Label>
                <label>Password:</label><br />
                </Label>
                <Input>
                <input type='text' />
                </Input>
                <br />
            </form>
            </Form>
        </>
    )
}

export default Login;