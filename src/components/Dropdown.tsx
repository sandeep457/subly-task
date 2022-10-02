import mediaType from "./interface";
import "./Dropdown.css";
type selectProps = {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  data: [];
};

export default function DropdownFilter(props: selectProps) {
  return (
    <div>
      <label>Filter by status: </label>
      <select className="dropdown-container" id="select-input" onChange={props.handleChange}>
        <option className="dropdown-title" value={"default"}>All</option>
        {props.data ? props.data.map((option: mediaType) => {
              return (
                <option className="dropdown-title" key={option.id} value={option.status}>
                  {option.status.charAt(0).toUpperCase() +
                    option.status.slice(1)}
                </option>
              );
            })
          : ""}
          <div className="dropdown-list-container">
        <div className="dropdown-list-wrapper">
            <ul className="dropdown-list"></ul>
            <div className="floating-icon" aria-hidden="true"></div>
        </div>
    </div>
      </select>
    </div>
  );
}
