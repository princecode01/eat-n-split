import Button from "./Button";

export default function Friend({
  friend,
  handleShowSplitBill,
  selectedFriend,
}) {
  const isSelected = selectedFriend?.id === friend.id;
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
          handleShowSplitBill(friend);
        }}
      >
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
