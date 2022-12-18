import style from "./Statistics.module.css";
import PropTypes from 'prop-types';


const Statistics = ({title, stats }) => {
  return (<section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics