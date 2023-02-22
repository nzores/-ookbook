const React = require("react");

const Layout = require('./Layout');
const Registration = require('./Register');
const Login = require('./Login');
const Navbar = require('./Navbar');

function Main({ username, userid, coockbook }) {
  console.log('username: ', username);
  return (
    <Layout>
      <Navbar username={username} userid={userid} />
      <h1>Main Page</h1>
      {coockbook &&
        coockbook.map(({ id, title, text }) => (
          <div key={id} id={id}>
            <h2>{title}</h2>
            <h3>{text}</h3>
          </div>
        ))}
      <div id="modalWin">
        <Registration />
        <Login />
      </div>
      {/* <div className="d-flex justify-content-between">
        {coockbook.map((el) => (
          <Card
            id="deckblock"
            style={{
              backgroundColor: "red",
              backgroundAttachment: "fixed",
            }}
          >
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title style={{ cursor: "default" }}>
                {" "}
                <a
                  href={`/recipe/${el.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {el.name}
                </a>
              </Card.Title>
              <Card.Text style={{ cursor: "default" }} />
            </Card.Body>
          </Card>
        ))}
      </div> */}
    </Layout>
  );
}
module.exports = Main;
