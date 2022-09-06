import { FC } from 'react';
import style from './buttons.module.scss';

interface Props {
    disabled: boolean;
    reset: () => void;
    save: () => void;
}

const Buttons: FC<Props> = ({ disabled, reset, save }) => {
    return (
        <div className={style.container}>
            <button onClick={() => reset()} className={style.item}>
                Reset
            </button>
            <button
                disabled={disabled}
                className={!disabled ? style.item : style.itemDisabled}
                onClick={() => save()}>
                Save
            </button>
        </div>
    );
};

export default Buttons;
