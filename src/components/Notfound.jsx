import { Button, Header, Icon, Segment } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="meh outline" />
        You are requesting invalid page
      </Header>
    </Segment>
  );
};

export default NotFound;
