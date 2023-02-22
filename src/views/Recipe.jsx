const React = require("react");

const Layout = require("./Layout");

function Recipe(props) {
  const { plainCoockbooks: coockbook } = props;
  return (
    <Layout>
      <script defer src="css/style.css" />
      <div className="card">
        <div className="header">
          <div className="icon">
            <a href="#">
              <i className="fa fa-heart-o" />
            </a>
          </div>
        </div>
        <div className="text">
          <h1 className="food">Chinese Noodles</h1>
          <i className="fa fa-clock-o"> 15 Mins</i>
          <i className="fa fa-users"> Serves 2</i>

          <div className="stars">
            <li>
              <a href="#">
                <i className="fa fa-star" />
              </a>
              <a href="#">
                <i className="fa fa-star" />
              </a>
              <a href="#">
                <i className="fa fa-star" />
              </a>
              <a href="#">
                <i className="fa fa-star" />
              </a>
              <a href="#">
                <i className="fa fa-star-o" />
              </a>
            </li>
          </div>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            temporibus.
          </p>
        </div>
        <a href="#" className="btn">
          Let's Cook!
        </a>
      </div>
    </Layout>
  );
}
module.exports = Recipe;
