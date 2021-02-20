import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    item: {
      display: 'flex',
      alignItems: 'center',
      width: 330,
      height: 80,
      boxShadow: '0 0 5px',
      borderRadius: 5,
      padding: 15,
      marginBottom: 10,
    },
    status: {
      width: 25,
      height: 25,
      borderRadius: 25,
    },
    avatar: {
        marginLeft: 25,
        width: 70,
    },
    name: {
        fontSize: 25,
        marginLeft: 35,
    },
})

const FriendListItem = ({ isOnline, avatar, name }) => {
    const classes = useStyles();
    return (
<li className={classes.item}>
  <span className={classes.status} style={{ backgroundColor: isOnline ? "green" : "red" }}>{isOnline}</span>
  <img className={classes.avatar} src={avatar} alt={name} width="48" />
  <p className={classes.name}>{name}</p>
</li>

    )
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default FriendListItem;