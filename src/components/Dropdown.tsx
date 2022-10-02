import React, {useState } from "react";
import mediaType from './interface';

type selectProps = {
    handleChange:(event: React.ChangeEvent<HTMLSelectElement>) => void;
    data:[]
}
export default function DropdownFilter(props: selectProps) {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const handleChange = (event:  React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedItem(event.target.value);
    };

  return (
    <div>
     <label>Filter by status: </label>
      <select id="select-input" onChange={props.handleChange}>
      <option value={"default"}>
          Choose an option
        </option>
        {props.data ? props.data.map((option:mediaType) => {
              return (
              <option key={option.id} value={option.status}>{option.status.charAt(0).toUpperCase() + option.status.slice(1)}</option>)
            }) : ''}
      </select>
    </div>
  )
}
