import { useEffect, useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [Intelligence, setIntelligence] = useState([]);
  const [clientId, setClientId] = useState("");

  const data = useMemo(
    () => [
      {
        client_id: "medicare_marketing",
        client_name: "medicare marketing",
        awv: {
          collection: "",
          active_flag: "true",
          rank_coln: "stars_v2_api_row_id",
          template: {}
        },
        aep_lapse: {
          collection: "",
          active_flag: "false",
          stream_chunk_size: "1024",
          template: {}
        },
        aep_rapid: {
          collection: "",
          active_flag: "true",
          stream_chunk_size: "1024",
          template: {}
        }
      },
      {
        client_id: "medicare_marketing2",
        client_name: "medicare marketing 2",
        awv2: {
          collection: "",
          active_flag: "true",
          rank_coln: "stars_v2_api_row_id",
          template: {}
        },
        aep_lapse2: {
          collection: "",
          active_flag: "false",
          stream_chunk_size: "1024",
          template: {}
        },
        aep_rapid2: {
          collection: "",
          active_flag: "true",
          stream_chunk_size: "1024",
          template: {}
        }
      }
    ],
    []
  );

  const selectClientId = (e) => {
    const { value } = e.target;
    setClientId(value);
  };
  useEffect(() => {
    if (clientId) {
      const { client_id, client_name, ...restProps } =
        data.find(({ client_id }) => client_id === clientId) || {};
      if (restProps) {
        setIntelligence(Object.keys(restProps));
      }
    }
  }, [clientId, data]);

  return (
    <div className="App">
      <div className="option">
        <label>Client Id: </label>
        <select onChange={selectClientId}>
          <option value="-1">Select Client Id</option>
          {data.map((option) => (
            <option value={option.client_id}>{option.client_name}</option>
          ))}
        </select>
      </div>
      <div className="option">
        <label>Intelligence Type: </label>
        <select>
          {Intelligence.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
