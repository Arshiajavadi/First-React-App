import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  active: boolean;
  selectedItem: (item: string) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "skyblue" : "none")};
  border-radius: 5px;
  cursor: pointer;
`;

function ListGroup({ items, heading, selectedItem }: Props) {
  // items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <List>
        {items.length === 0 && <p>Nothing Found</p>}
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index), selectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
