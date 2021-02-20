import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import FriendListItem from './FriendListItem';

const useStyles = createUseStyles({
    friendList: {
       margin: 30,
   }
})
const FriendList = ({ friends }) => {
    const classes = useStyles()
     return (
        <ul className={classes.friendList}>
            {friends.map(friend =>
                <FriendListItem key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />)}
        </ul>
    )
};

FriendListItem.propTypes = {
    friends: PropTypes.shape({
        id: PropTypes.number.isRequired
    }),
}
export default FriendList;