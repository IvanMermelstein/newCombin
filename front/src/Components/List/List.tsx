import { ContextProps, useAppContext } from '../../context/AppContext';
import style from './list.module.scss';

const List = () => {
    const { members } = useAppContext() as ContextProps;

    return (
        <div className={style.container}>
            <table className={style.table}>
                <tbody>
                    <tr className={style.titles}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>SSN</th>
                    </tr>
                    {members.map(member => (
                        <tr key={member.ssn} className={style.member}>
                            <th>{member.firstName}</th>
                            <th>{member.lastName}</th>
                            <th>{member.address}</th>
                            <th>{member.ssn}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
