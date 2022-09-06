import { ChangeEvent } from 'react';
import { ContextProps, useAppContext } from '../../context/AppContext';
import style from './input.module.scss';

const AddressInput = () => {
    const { address, setAddress } = useAppContext() as ContextProps;
    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setAddress(e.target.value);
    };

    return (
        <div className={style.container}>
            <p>
                <b>Address</b>
            </p>
            <input
                value={address}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange(e)
                }
                placeholder={'742 Evergreen Terrace'}
            />
        </div>
    );
};

export default AddressInput;
