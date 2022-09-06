import { ChangeEvent } from 'react';
import NumberFormat from 'react-number-format';
import { ContextProps, useAppContext } from '../../context/AppContext';
import style from './input.module.scss';

const SSNInput = () => {
    const { SSN, setSSN } = useAppContext() as ContextProps;
    const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSSN(e.target.value);
    };

    return (
        <div className={style.container}>
            <p>
                <b>SSN</b>
            </p>
            <NumberFormat
                format={'###-##-####'}
                value={SSN}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onInputChange(e)
                }
                placeholder={'000-00-0000'}
                inputMode={'decimal'}
                pattern={'[0-9]*'}
            />
        </div>
    );
};

export default SSNInput;
