import { ChangeEvent } from 'react';
import { ContextProps, useAppContext } from '../../context/AppContext';
import style from './input.module.scss';

const FirstNameInput = () => {
    const { firstName, setFirstName } = useAppContext() as ContextProps;
    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFirstName(e.target.value);
    };

    return (
        <div className={style.container}>
            <p>
                <b>First Name</b>
            </p>
            <input
                value={firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange(e)
                }
                placeholder={'Homer'}
            />
        </div>
    );
};

export default FirstNameInput;
