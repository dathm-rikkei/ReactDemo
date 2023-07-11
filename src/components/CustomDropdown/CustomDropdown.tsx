import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface DropdownCustomProps {
  value: any;
  onChange: (event: any) => void;
  items: { value: any; key: string }[];
  className?: string;
  style?: React.CSSProperties;
}

const DropdowCustom: React.FC<DropdownCustomProps> = ({
  value,
  onChange,
  items,
  className,
  style,
}) => {
  return (
    <div>
      <FormControl
        style={style}
        className={className}
        sx={{ m: 1, minWidth: 120 }}
        size="small"
      >
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {items?.map((item) => (
            <MenuItem key={item.key} value={item.value}>
              {item.key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdowCustom;
