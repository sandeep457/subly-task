import { useEffect, useState } from "react";
import { serviceCall } from '../service/serviceCall';
import Card from './Card';
import './Dashboard.css'
import mediaType from './interface';
import DropdownFilter from './Dropdown';

const baseURL = "https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b";
export default function Dashboard() {

const [filesData, setFilesData] = useState<any>({});
  useEffect(() => {
      getData();
  }, []);
  const getData = async ()=>{
      const data = await serviceCall("GET", baseURL, null);
      setFilesData(data)
  };
  const filterItem = (selectedStatus: string) => {
    const filteredArray =  filesData.media.filter((newVal: { status: string; }) => {
      return newVal.status === selectedStatus; 
    });
   console.log(filteredArray)
  };
  
  return (
    <div>
    <div><DropdownFilter handleChange={event => filterItem(event.target.value)} data={filesData.media}/> </div>
      {Object.keys(filesData).map((key) => {
        return (
          <div className="row">
            {filesData[key].map((val: mediaType) => {
              return (<Card  name={val.name}
              key={val.id}
              id={val.id}
              cover={val.cover}
              createdAt={val.createdAt}
              status={val.status}
              languages={val.languages}
              updatedAt={val.updatedAt}/>)
            })}
          </div>
        );
      })}
    </div>
  );
}
