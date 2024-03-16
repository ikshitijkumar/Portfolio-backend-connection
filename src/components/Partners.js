import { useContext, 
  // useEffect, useState
 } from "react";
import { DataContext } from "../context/DataContext";
// import { fatchData } from "../utilits";

const Partners = ({ dark }) => {
  const {data} = useContext(DataContext)
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   setData(await fatchData("/static/partners.json"));
  // }, []);
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {data.user &&
                data.user?.skills.map((img,i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={img._id}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                      <img
                        src={img.image.url}
                        alt="image"
                      />
                      {/* <a className="dizme_tm_full_link" a="" href={img.link} /> */}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
