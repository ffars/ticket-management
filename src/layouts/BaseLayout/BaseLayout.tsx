import { FC, ReactNode } from "react";
import { Container, Content } from "./BaseLayout.styles";
import Navigation from "./Navigation/Navigation";

interface IProps {
  children: ReactNode;
}

const BaseLayout: FC<IProps> = ({ children }) => {

  return (
    <Container>
      <Navigation />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default BaseLayout;
