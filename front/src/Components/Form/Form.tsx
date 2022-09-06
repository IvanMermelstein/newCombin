import { useEffect, useState } from 'react';
import { ContextProps, useAppContext } from '../../context/AppContext';
import Buttons from '../Buttons/Buttons';
import AddressInput from '../Inputs/AddressInput';
import FirstNameInput from '../Inputs/FirstNameInput';
import LastNameInput from '../Inputs/LastNameInput';
import SSNInput from '../Inputs/SSNInput';
import style from './form.module.scss';

const Form = () => {
    const [saveDisabled, setSaveDisabled] = useState(true);
    const { SSN, address, firstName, lastName } =
        useAppContext() as ContextProps;

    useEffect(() => {
        if (
            address.length > 0 &&
            firstName.length > 0 &&
            lastName.length > 0 &&
            SSN.trim().length === 11
        ) {
            setSaveDisabled(false);
        } else {
            setSaveDisabled(true);
        }
    }, [SSN, address, firstName, lastName]);

    return (
        <div className={style.container}>
            <FirstNameInput />
            <LastNameInput />
            <AddressInput />
            <SSNInput />
            <Buttons disabled={saveDisabled} />
        </div>
    );
};

export default Form;
