import Friend from "./Friend";

export default function FriendList({
    friends,
    handleShowSplitBill,
    showSplitBill,
    setSplitObj,
    splitObj,
    selectedFriend,
    setSelectedFriend
  }) {
  
    return (
      <ul>
        {friends?.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            handleShowSplitBill={handleShowSplitBill}
            setSplitObj={setSplitObj}
            splitObj={splitObj}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        ))}
      </ul>
    );
  }
  