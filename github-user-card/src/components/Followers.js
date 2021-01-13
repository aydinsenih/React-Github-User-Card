import { Card, Avatar } from "antd";
const Followers = (props) => {
  const data = props.data;
  return (
    <Card className="followers-card">
      <a href={data.html_url} target="_blank" rel="noreferrer">
        <Avatar shape="square" size="large" src={data.avatar_url}></Avatar>
        <p> {data.login}</p>
      </a>
    </Card>
  );
};

export default Followers;
