import Button from "./Button";

export default function FormAddFriend({ friend,setFriend, setFriends }) {
    const getInputValue = (e) => {
      let myFriend = { ...friend, id: Date.now() };
      myFriend[e.target.name] = e.target.value;
      console.log(myFriend);
      setFriend(myFriend);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFriends((friends) => [...friends, friend]);
      setFriend({
        id: null,
        name: "",
        imageUrl: "https://i.pravatar.cc/48",
        balance: 0,
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="form-add-friend">
        <label>🧑‍🤝‍🧑 Friend name</label>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={getInputValue}
        />
        <label>🖼️ Image url</label>
        <input
          type="text"
          name="imageUrl"
          value={friend.imageUrl}
          onChange={getInputValue}
        />
  
        <Button>Add</Button>
      </form>
    );
  }