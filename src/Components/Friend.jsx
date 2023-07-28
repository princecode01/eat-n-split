import Button from "./Button";

export default function Friend({
  friend,
  handleShowSplitBill,
  setSplitObj,
  splitObj,
  selectedFriend,
  setSelectedFriend,
}) {
  const isSelected = selectedFriend.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.imageUrl} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and your friend are even</p>}

      <Button
        onClick={() => {
          handleShowSplitBill();
          setSplitObj({ ...splitObj, friend: friend.name });
          setSelectedFriend((selected) =>
            selected.id === friend.id ? {} : friend
          );
        }}
      >
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
