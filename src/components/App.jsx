import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import data from './data/data.json';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import style from "./app.module.css";

export const App = () => {
  return (
    <div className={style.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


