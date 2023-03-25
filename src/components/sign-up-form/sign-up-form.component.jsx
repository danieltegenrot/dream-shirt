import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (displayName==='' || email==='' || password==='') {
            return;
        } else {
            if (password !== confirmPassword) {
                alert('passwords do not match');
                return;
            } 
            if (password.length < 6) {
                alert('password must be at least 6 characters');
                return;
            }
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch(error) {
            if(error.code == 'auth/email-already-in-use') {
                alert('Email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }


    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label type="email">Email</label>
                <input required onChange={handleChange} name="email" value={email}/>

                <label type="password">Password</label>
                <input required onChange={handleChange} name="password" value={password}/>

                <label type="password">Confirm password</label>
                <input required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm