import { useEffect, useState } from 'react';
import { ContextProps, Member, useAppContext } from '../../context/AppContext';
import { saveMember } from '../../utils/saveMember';
import Buttons from '../Buttons/Buttons';
import AddressInput from '../Inputs/AddressInput';
import FirstNameInput from '../Inputs/FirstNameInput';
import LastNameInput from '../Inputs/LastNameInput';
import SSNInput from '../Inputs/SSNInput';
import style from './form.module.scss';

const Form = () => {
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [error, setError] = useState(false);
    const {
        SSN,
        address,
        firstName,
        lastName,
        setSSN,
        setAddress,
        setFirstName,
        setLastName,
        setMembers,
    } = useAppContext() as ContextProps;

    useEffect(() => {
        setError(false);
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

    const reset = () => {
        setSSN('');
        setAddress('');
        setFirstName('');
        setLastName('');
    };

    const save = () => {
        const newMember: Member = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            ssn: SSN,
        };
        saveMember(newMember)
            .then(() => {
                setMembers(members => [...members, newMember]);
                reset();
            })
            .catch(() => {
                setError(true);
            });
    };

    return (
        <div className={style.container}>
            <FirstNameInput />
            <LastNameInput />
            <AddressInput />
            <SSNInput />
            <Buttons disabled={saveDisabled} reset={reset} save={save} />
            {error && <div>{'Something went wrong, please try again'}</div>}
        </div>
    );
};

export default Form;
