import './App.css';

import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import FriendList from './Components/FriendList';
import TransactionHistory from './Components/TransactionHistory';

import user from './Data/user.json';
import statisticalData from './Data/statistical-data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json'

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={ transactions}/>
     
       
    </div>
  )
}

export default App;
