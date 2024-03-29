import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Counter from "./Counter";
const About = ({ dark }) => {
  const {data} = useContext(DataContext)

  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   setData(await fatchData("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"));
  // }, []);
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                {/* <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" /> */}
                <img src={`${data.user?.about.avatar ? data.user?.about.avatar.url : `img/about/${dark ? 2 : 1}.jpg`}`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={`${data.user?.about.exp_year}`} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={`${data.user?.about.some_total}`} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a ${data.user?.about.title}`}</span>
                <h3>{`${data.user?.about.subTitle}`}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`${data.user?.about.description}`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
