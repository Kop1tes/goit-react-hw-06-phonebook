import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "redux/filter.slice";
import { InputPhone } from "./Contacts.styled";

export const ContactsFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const onQueryChange = e => {
        dispatch(setFilter(e.currentTarger.value));
    };

    return (
        <>
            <InputPhone
                placeholder="Find contacts by name"
                type="text"
                value={filter}
                onChange={onQueryChange}
            />
        </>
    );
};