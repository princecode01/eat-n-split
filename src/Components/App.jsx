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
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friend, setFriend] = useState({
    id: null,
    name: "",
    imageUrl: "https://i.pravatar.cc/48",
    balance: 0,
  });

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null)
  };
  const handleShowSplitBill = (selected) => {
    setSelectedFriend((cur) => (cur?.id === selected.id ? null : selected));
    setShowAddFriend(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleShowSplitBill={handleShowSplitBill}
          selectedFriend={selectedFriend}
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
      {selectedFriend && (
        <FormSplitBill
          friends={friends}
          setFriends={setFriends}
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
