
import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'
/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = (currentUser) => currentUser? (
  <Card>
    <Image src={currentUser.img} />
    <Card.Content>
      <Card.Header>{currentUser.name}</Card.Header>

      <Card.Description>{currentUser.email}</Card.Description>
    </Card.Content>
  </Card>
) : <Redirect to="/login" />

export default Profile;
