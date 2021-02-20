import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const getBgColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
const useStyles = createUseStyles({
  statistics: {
    textAlign: 'center',
    width: 350,
    border: '2px solid grey',
    borderRadius: 2,
    margin: 30,
    },
    title: {
      fontSize: 30,
      textTransform: 'uppercase',
      color: 'rgb(66, 65, 65)',
    },
    statList: {
      display: 'flex',
      margin: '0 auto',
      padding: 0,
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      paddingTop: 15,
      height: 70,
      width: '100%',
      border: '1px solid grey',
}
    

})
const Statisctics = ({ title, stats }) => {
    const classes = useStyles()
    return (
    <div className={classes.statistics}>
        {title && <h2 className={classes.title}>{title}</h2>}
        <ul className={classes.statList}>
                {stats.map(stat => (
                <li className={classes.item} key={stat.id} style={{backgroundColor: getBgColor()}}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                </li>
            ))}
   
  </ul>
</div> 
    )
};

Statisctics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
   
}

export default Statisctics;
