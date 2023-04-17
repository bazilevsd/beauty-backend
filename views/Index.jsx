const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Index page">
        <p>This is boilerplate 😎</p>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
