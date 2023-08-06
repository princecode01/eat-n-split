import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friends, setFriends, selectedFriend }) {
  const [splitObj, setSplitObj] = useState({
    billValue: "",
    userExpense: "",
    friendExpense: "",
    whoSpent: "user",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!splitObj.billValue || !splitObj.userExpense) return;
    setFriends(
      [...friends].map((friend) =>
        friend.name === selectedFriend.name
          ? {
              ...friend,
              balance:
                friend.balance +
                (splitObj.whoSpent === "user"
                  ? splitObj.friendExpense
                  : -splitObj.userExpense),
            }
          : friend
      )
    );
    setSplitObj({
      billValue: "",
      userExpense: "",
      friendExpense: "",
      whoSpent: "user",
    });
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        name="billValue"
        value={splitObj.billValue}
        onChange={(e) => {
          setSplitObj({ ...splitObj, billValue: Number(e.target.value) });
        }}
      />

      <label>🕴️ Your expense</label>
      <input
        type="text"
        name="userExpense"
        value={splitObj.userExpense}
        onChange={(e) => {
          setSplitObj({
            ...splitObj,
            userExpense:
              Number(e.target.value) > splitObj.billValue
                ? splitObj.userExpense
                : Number(e.target.value),
            friendExpense: splitObj.billValue - Number(e.target.value),
          });
        }}
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name} expense</label>
      <input type="text" value={splitObj.friendExpense} disabled />

      <label>🤑 Who is paying the bill</label>
      <select
        name="whoSpent"
        onChange={(e) => {
          setSplitObj({ ...splitObj, whoSpent: e.target.value });
        }}
        value={splitObj.whoSpent}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
