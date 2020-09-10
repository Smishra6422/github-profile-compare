import React from "react";
import "./card.style.scss";
import { Typography, Tooltip } from "antd";
import {
  UsergroupAddOutlined,
  UserSwitchOutlined,
  BookOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

function Card({ user }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={user.avatar_url} alt="Imag" />
      </div>
      <div className="card-detail-container">
        <div className="bio-container">
          <Title level={3}>{user.name ? user.name : "Anonymous"}</Title>
          <Title level={4}>
            <EnvironmentOutlined />
            {user.location ? user.location : "Anonymous"}
          </Title>
        </div>
        <div className="icons-container">
          <div className="icon">
            <Tooltip placement="top" title={"Followers"}>
              <UsergroupAddOutlined />
              <Title level={5}>{user.followers}</Title>
            </Tooltip>
          </div>
          <div className="icon">
            <Tooltip placement="top" title={"Following"}>
              <UserSwitchOutlined />
              <Title level={5}>{user.following}</Title>
            </Tooltip>
          </div>
          <div className="icon">
            <Tooltip placement="top" title={"Repositories"}>
              <BookOutlined />
              <Title level={5}>{user.public_repos}</Title>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
