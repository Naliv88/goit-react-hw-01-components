import style from "./Statistics.module.css";
import PropTypes from 'prop-types';


const Statistics = ({ stats }) => {
  return (<section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      {stats.map(li=>{ 
      return <li className="item" key={li.id}>
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