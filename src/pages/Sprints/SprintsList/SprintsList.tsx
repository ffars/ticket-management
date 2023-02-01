import { FC } from "react";
import { Link } from "react-router-dom";
import { Sprint } from "../../../api/models/Sprint.interface";
import Card from "../../../components/Card/Card";
import { PATHS } from "../../../paths";
import { Container } from "./SprintsList.styles";

interface IProps {
  sprints: Sprint[]
}

const SprintsList: FC<IProps> = ({ sprints }) => {

  return (
    <Container>
      {sprints.map(({ name, startDate, endDate, id }) => {
        return (
          <Link key={id} to={PATHS.SPRINT_DETAILS.replace(':id', id)}>
            <Card title={name}>
              {`${startDate} until ${endDate}`}
            </Card>
          </Link>
        )
      })}
    </Container>
  )
}

export default SprintsList;
