const BlogPopUp = ({ data, open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      {data && (
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={() => close()}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="news_popup_informations">
              <div className="image">
                <img src="img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url={data.image && data.image.url}
                  style={{ backgroundImage: `url(${data.image && data.image.url})`, objectFit: "contain" }}
                />
              </div>
              <div className="details">
                <h3>{data && data.title ? data.title : "Title"}</h3>
                <span>
                  <a href="#">{data.description && data.description.length > 0 ? data.description : "No description"}</a>
                </span>
                <div />
              </div>
              <div style={{ display: "inline-flex" }}>

                <div style={{marginRight:"5px"}} className="dizme_tm_button">
                  <a className="anchor" href={`${data.githuburl}`}>
                    <span>Github</span>
                  </a>
                </div>
                <div className="dizme_tm_button">
                  <a className="anchor" href={`${data.liveurl}`}>
                    <span>Live</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogPopUp;
