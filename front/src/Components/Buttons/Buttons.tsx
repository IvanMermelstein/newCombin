import { FC } from 'react';
import { ContextProps, useAppContext } from '../../context/AppContext';
import style from './buttons.module.scss';

interface Props {
    disabled: boolean;
}

const Buttons: FC<Props> = ({ disabled }) => {
    const { setSSN, setAddress, setFirstName, setLastName } =
        useAppContext() as ContextProps;

    const reset = () => {
        setSSN('');
        setAddress('');
        setFirstName('');
        setLastName('');
    };

    return (
        <div className={style.container}>
            <button onClick={() => reset()} className={style.item}>
                Reset
            </button>
            <button
                disabled={disabled}
                className={!disabled ? style.item : style.itemDisabled}>
                Save
            </button>
        </div>
    );
};

export default Buttons;
