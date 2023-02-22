/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

const Layout = require('./Layout');

function Form() {
  return (
    <Layout>
      <form action="/form" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input name="title" type="text" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Text</label>
          <input name="text" type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Layout>
  );
}

module.exports = Form;
