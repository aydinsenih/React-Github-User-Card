import { Card, Avatar } from "antd";
const User = (props) => {
  const data = props.data;
  return (
    <div className="user">
      <Card>
        <div className="card-one">
          <Avatar shape="square" src={data.avatar_url} size={128}></Avatar>
          <p>{data.name}</p>
          <p>{data.location}</p>
          <p>followers: {data.followers}</p>
          <p>following: {data.following}</p>
        </div>
        <div className="card-two">
          <p>Bio: {data.bio}</p>
          <a href={data.html_url} target="_blank" rel="noreferrer">
            Checkout Github
          </a>
        </div>
      </Card>
    </div>
  );
};

export default User;
