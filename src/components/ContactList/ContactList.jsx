import { useSelector } from 'react-redux';
import { getFilteredUser, getUsers } from 'redux/userSelectors';
import { DeleteBtn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/userSlice';

const ContactList = () => {
  const contactUser = useSelector(getUsers);
  const filteredUser = useSelector(getFilteredUser);
  const dispatch = useDispatch();
  const normalizeFilteredUser = filteredUser.toLowerCase();
  const visibleContacts = contactUser.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, number, name }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <DeleteBtn type="button" onClick={() => dispatch(deleteUser(id))}>
              Delete
            </DeleteBtn>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;