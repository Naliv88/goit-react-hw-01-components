import PropTypes from 'prop-types';
import style from "./FriendsListItem.module.css";



 const FriendListItem = ({avatar, name, isOnline})=> {
    return (<li className= {style.item}>
      <span className={isOnline ?style.statusOnline :style.status}>{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
</li>);
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,  
}

export default FriendListItem;

