import React from 'react';
import Input from './Common/Input';
import Label from './Common/Label';
import Form from './Common/Form';

const Register = () => {
    return (
        <div>
            <Form>
            <h2>Register</h2>
            <form>
                <Label>
                <label>Full name:</label><br />
                </Label>
                <Input>
                <input type='text' />
                </Input>
                <br />
                <Label>
                <label>Email:</label><br />
                </Label>
                <Input>
                <input type='text' />
                </Input>
                <br />
                <Label>
                <label>Phone:</label><br />
                </Label>
                <Input>
                <input type='number' />
                </Input>
                <br />
                <Label>
                <label>Password:</label><br />
                </Label>
                <Input>
                <input type='text' />
                </Input>
                <br />
                <button type='submit'>Register</button>
            </form>
            </Form>
            
        </div>
    )
}

export default Register;