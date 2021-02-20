import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    li: {
      listStyle: 'none',
    },
    profile: {
      backgroundColor: 'rgb(200, 209, 214)',
      color: '#504f4f',
      textAalign: 'center',
      border: '2px solid rgba(34, 30, 37, 0.137)',
      borderRadius: 10,
      width: 350,
      margin: 30,
      padding: 20,
    },
  avatar: {
      textAlign: 'center',
      height: 200,
      borderRadius: 70,
    },
    name: {
      fontSize: 35,
      color: '',
    },
    stats: {
        display: 'inline-flex',
        padding: 0,
    },
    statsItem: {
      listStyle: 'none',
      padding: 10,
      border: '2px solid rgba(34, 30, 37, 0.137)',
    },
    label: {
      fontSize: 20,
      fontWeight: 500,
      color: '#222222',
}

})

const Profile = ({ user }) => {
    const classes = useStyles()
    return (
        <div className={classes.profile}>
            <div className="description">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className={classes.avatar} width="200"
                />
                <p className={classes.name}>{user.name}</p>
                <p className="tag">@{user.tag}</p>
                <p className="location">{user.location}</p>
            </div>

            <ul className={classes.stats}>
                <li className={classes.statsItem}>
                    <span className={classes.label}>Followers </span>
                    <span className="quantity">{user.stats.followers}</span>
                </li>
                <li className={classes.statsItem}>
                    <span className={classes.label}>Views </span>
                    <span className="quantity">{user.stats.views}</span>
                </li>
                <li className={classes.statsItem}>
                    <span className={classes.label}>Likes </span>
                    <span className="quantity">{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
       avatar: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       tag: PropTypes.string.isRequired,
       location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,  
        }).isRequired,  
    }).isRequired,

}

export default Profile;