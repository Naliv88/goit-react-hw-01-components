import style from "./Statistics.module.css";
import PropTypes from 'prop-types';


const Statistics = ({ stats }) => {
  return (<section className={style.statistics}>
    <h2 className={style.title}>Upload stats</h2>

    <ul className={style.statList}>
      {stats.map(li=>{ 
      return <li className={style.item} key={li.id}>
        <span className="label">{li.label}</span>
        <span className="percentage"> {li.percentage}%</span>
      </li>})}
    </ul>
  </section>);
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics