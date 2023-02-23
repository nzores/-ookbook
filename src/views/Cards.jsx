const React = require('react');

const Layout = require('./Layout');

function Card(props) {
  const { plainCoockbooks: coockbook } = props;
  return (
    <Layout>
      <div className="card" style={{ width: "30rem", height: "20rem" }}>
        <img className="card-img-top" src="https://kartinkin.net/uploads/posts/2021-04/1617232289_11-p-zharenaya-kurochka-krasivo-16.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Chiken</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
          <button style={{ width: "5rem", height: "5rem" }} className="btn btn-block btn-primary"><i className="fa fa-thumbs-up">Like</i></button>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Layout>
  );
}
module.exports = Card;
