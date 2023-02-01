import { FC } from "react";
import { PATHS } from "../../../paths";
import { Link, Nav } from "./Navigation.styles";

const NAV_ITEMS = [
  { label: "Tickets", path: PATHS.TICKETS },
  { label: "Sprints", path: PATHS.SPRINTS },
]

const Navigation: FC = () => {

  return (
    <Nav>
      {NAV_ITEMS.map(({ path, label }) => {
        return (
          <Link key={path} to={path}>
            {label}
          </Link>
        )
      })}
    </Nav>
  )
}

export default Navigation;
