import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function App() {
  const [selected, setSelected] = React.useState(new Set(["City"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="orange" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="orange"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="City">City</Dropdown.Item>
        <Dropdown.Item key="Gurgaon">Gurgaon</Dropdown.Item>
        <Dropdown.Item key="New Delhi">New Delhi</Dropdown.Item>
        <Dropdown.Item key="Noida">Noida</Dropdown.Item>
        <Dropdown.Item key="Pune">Pune</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}