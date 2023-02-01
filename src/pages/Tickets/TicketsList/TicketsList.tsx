import { FC } from "react";
import { Ticket } from "../../../api/models/Ticket.interface";
import { Button } from "../../../components/Button";
import Card from "../../../components/Card/Card";
import { Container, ContentBox } from "./TicketsList.styles";

interface IProps {
  tickets: Ticket[];
  setAssignId?: (id: string) => void;
}

const TicketsList: FC<IProps> = ({ tickets, setAssignId }) => {

  return (
    <Container>
      {tickets.map(({ id, name, description }) => {
        return (
          <Card key={id} title={name}>
            <ContentBox>
              {description}
              {setAssignId && <Button onClick={() => setAssignId(id)}>Assign To Sprint</Button>}
            </ContentBox>
          </Card>
        )
      })}
    </Container>
  )
}

export default TicketsList;
