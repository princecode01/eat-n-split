import { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    imageUrl: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    imageUrl: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    imageUrl: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplitBill, setShowSplitBill] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [friend, setFriend] = useState({
    id: null,
    name: "",
    imageUrl: "https://i.pravatar.cc/48",
    balance: 0,
  });
  const [splitObj, setSplitObj] = useState({
    friend: "",
    billValue: "",
    userExpense: "",
    friendExpense: "",
    whoSpent: "user",
  });
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
    setShowSplitBill(false);
  };
  const handleShowSplitBill = () => {
    setShowSplitBill((show) => !show);
    setShowAddFriend(false)
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleShowSplitBill={handleShowSplitBill}
          setSplitObj={setSplitObj}
          splitObj={splitObj}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            friend={friend}
            setFriend={setFriend}
            setFriends={setFriends}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {showSplitBill && (
        <FormSplitBill
          splitObj={splitObj}
          setSplitObj={setSplitObj}
          friends={friends}
          setFriends={setFriends}
          setShowSplitBill={setShowSplitBill}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}
