import Friend from "./Friend";

export default function FriendList({
  friends,
  handleShowSplitBill,
  selectedFriend,
}) {
  return (
    <ul>
      {friends?.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleShowSplitBill={handleShowSplitBill}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
