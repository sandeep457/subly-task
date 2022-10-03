import { useEffect, useState } from "react";
import { serviceCall } from "../../service/serviceCall";
import Card from "../Card/Card";
import "./Dashboard.css";
import mediaType from "../interface";
import DropdownFilter from "../Dropdown/DropdownFilter";

const baseURL = "https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b";

export default function Dashboard() {
  const [filesData, setFilesData] = useState<any>({});
  const [finalData, setFinalData] = useState([]);

  // on component load fetch data
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await serviceCall("GET", baseURL, null);
    setFilesData(data);
    setFinalData(data.media);
  };

  // filter functionality of cards based on status
  const filterItem = (selectedStatus: string) => {
   const filteredArray = filesData.media.filter((newVal: { status: string }) => {
     return (newVal.status === selectedStatus)
   });
    if (filteredArray && filteredArray.length > 0) {
      setFinalData(filteredArray);
    }else{
      setFinalData(filesData.media);
    }
  };

  return (
    <div data-testid="dashboard">
      <div>
      { filesData.media && <DropdownFilter
          handleChange={(event) => filterItem(event.target.value)}
          data={filesData.media}
        /> }
      </div>
      <div className="row">
        {finalData.map((val: mediaType) => {
          return (
            <Card
              name={val.name}
              key={val.id}
              id={val.id}
              cover={val.cover}
              createdAt={val.createdAt}
              status={val.status}
              languages={val.languages}
              updatedAt={val.updatedAt}
              errorMessage = {val.errorMessage}
            />
          );
        })}
      </div>
    </div>
  );
}
