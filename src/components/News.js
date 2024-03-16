import { useEffect, useState } from "react";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const News = () => {
  // const [data, setData] = useState([]);
  const {data} = useContext(DataContext)
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);
  // useEffect(async () => {
  //   // setData(await fatchData("/static/blog.json"));
  //   setData(await fatchData("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"));
  //   aTagClick();
  // }, []);
  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>From My Blog</span>
            <h3>{`Our Recent Updates, Blog, Tips, Tricks & More`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data.user &&
                data.user.projects.map((blog) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={blog._id}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={`${blog.image ? blog.image.url :"img/thumbs/42-29.jpg"}`} alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.image}
                          style={{
                            backgroundImage: `url(${blog && blog.image.url})`,
                          }}
                        />
                        {/* <div className="date">
                          <h3>{blog && blog.date && blog.date.date}</h3>
                          <span>{blog && blog.date && blog.date.month}</span>
                        </div> */}
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        {/* <span className="category">
                          <a href="#">{blog.category}</a>
                        </span> */}
                        <h3 className="title">
                          <a href="#">{blog.title}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          {/* <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div> */}
                          n
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;
