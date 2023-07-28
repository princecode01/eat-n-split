import Button from "./Button";

export default function FormSplitBill({
  splitObj,
  setSplitObj,
  friends,
  setFriends,
  setShowSplitBill,
  setSelectedFriend,
}) {
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!splitObj.billValue || !splitObj.userExpense) return;
    setFriends(
      [...friends].map((friend) =>
        friend.name === splitObj.friend
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
      friend: "",
      billValue: "",
      userExpense: "",
      friendExpense: "",
      whoSpent: "user",
    });
    setShowSplitBill(false);
    setSelectedFriend({});
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {splitObj.friend}</h2>

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

      <label>🧑‍🤝‍🧑 {splitObj.friend} expense</label>
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
        <option value="friend">{splitObj.friend}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
