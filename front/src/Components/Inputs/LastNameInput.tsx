import { ChangeEvent } from 'react';
import { ContextProps, useAppContext } from '../../context/AppContext';
import style from './input.module.scss';

const LastNameInput = () => {
    const { lastName, setLastName } = useAppContext() as ContextProps;
    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setLastName(e.target.value);
    };

    return (
        <div className={style.container}>
            <p>
                <b>Last Name</b>
            </p>
            <input
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange(e)
                }
                placeholder={'Simpson'}
            />
        </div>
    );
};

export default LastNameInput;
