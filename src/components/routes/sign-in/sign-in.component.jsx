import Button from '../../button/button.component';
import './sign-in.styles.scss';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in-container">
            <div className="sign-in-form">
                <h2>Sign in</h2>
                <form>
                    <Button label="Sign up with Google" className="primary-button google-button" onClick={logGoogleUser} />
                </form>
            </div>
            <SignUpForm />
        </div>

    )
}

export default SignIn