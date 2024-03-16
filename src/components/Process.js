import parse from "html-react-parser";
// import { useEffect, useState } from "react";
// import { fatchData } from "../utilits";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Process = ({ dark }) => {
  const { data } = useContext(DataContext);
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   setData(await fatchData("/static/workProcess.json"));
  // }, []);
  return (
    <div className="dizme_tm_section" id="process">
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>TimeLines</h3>
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            <ul>
              {data.user && data.user.timeline &&
                data.user.timeline.map((data) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={data._id}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <img
                            className="brush"
                            src={`${data?.icon ? data.icon.url : "img/brushes/process/1.png"}`}
                            // src={`img/brushes/process${dark ? "/dark" : ""}/${ i + 1 }.png`}
                            alt = "image"
                            />
                            {/* {parse(data.icons[dark ? "dark" : "light"])} */ }
                        </span>
                      </div>
                      <div className="title">
                        <h3>{data.company_name}m</h3>
                      </div>
                      <div className="text">
                        <p>{data.summary}</p>
                        <ul style={{ marginTop: "3px" }}>
                          {data.bulletPoints.map((detail, i) => (
                            detail.length > 0 &&
                            <li style={{ width: "-webkit-fill-available", margin: "2px", listStyle: "inside" }} key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
