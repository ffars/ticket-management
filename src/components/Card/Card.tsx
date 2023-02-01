import { FC, ReactNode } from "react";
import { CardBox, CardTitle } from "./Card.styles";

interface IProps {
  title: string;
  children: ReactNode;
}

const Card: FC<IProps> = ({  title, children}) => {
  return (
    <CardBox>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardBox>
  )
}

export default Card;
