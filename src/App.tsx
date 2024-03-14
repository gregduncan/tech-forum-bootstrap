import React from 'react';
import ReactDOM from 'react-dom/client';
// import '../../../../../dist/bootstrap/v5/bootstrap.css';
import './shiny-friendly-bootstrap.css';
import './index.scss';

const App = () => {
  return (
    <div className="container" style={{ paddingTop: 30, paddingBottom: 60 }}>
      <h1>Bootstrap v5 MDS Demo</h1>

      {/* Accordion */}
      <h2>Accordion</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">This is the content for Accordion Item #1.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">This is the content for Accordion Item #2.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">This is the content for Accordion Item #3.</div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <h2>Alerts</h2>

      <div className="alert alert-primary" role="alert">
        A simple primary alert.
      </div>

      <div className="alert alert-secondary" role="alert">
        A simple secondary alert.
      </div>

      <div className="alert alert-success" role="alert">
        A simple success alert.
      </div>

      <div className="alert alert-danger" role="alert">
        A simple danger alert.
      </div>

      <div className="alert alert-warning" role="alert">
        A simple warning alert.
      </div>

      <div className="alert alert-info" role="alert">
        A simple info alert.
      </div>

      <div className="alert alert-light" role="alert">
        A simple light alert.
      </div>

      <div className="alert alert-dark" role="alert">
        A simple dark alert.
      </div>

      <div className="alert alert-dismissible fade show" role="alert">
        An alert with a close button.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <div className="alert alert-primary alert-dismissible fade show" role="alert">
        An auto-closing alert
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      {/* Buttons */}
      <h2>Buttons</h2>

      <button type="button" className="btn btn-primary me-2">
        Primary
      </button>
      <button type="button" className="btn btn-secondary me-2">
        Secondary
      </button>
      <button type="button" className="btn btn-success me-2">
        Success
      </button>
      <button type="button" className="btn btn-danger me-2">
        Danger
      </button>
      <button type="button" className="btn btn-warning me-2">
        Warning
      </button>
      <button type="button" className="btn btn-info me-2">
        Info
      </button>
      <button type="button" className="btn btn-light me-2">
        Light
      </button>
      <button type="button" className="btn btn-dark me-2">
        Dark
      </button>

      {/* Outline Buttons */}
      <h3>Buttons Outline</h3>
      <button type="button" className="btn btn-outline-primary me-2">
        Primary
      </button>
      <button type="button" className="btn btn-outline-secondary me-2">
        Secondary
      </button>
      <button type="button" className="btn btn-outline-success me-2">
        Success
      </button>
      <button type="button" className="btn btn-outline-danger me-2">
        Danger
      </button>
      <button type="button" className="btn btn-outline-warning me-2">
        Warning
      </button>
      <button type="button" className="btn btn-outline-info me-2">
        Info
      </button>
      <button type="button" className="btn btn-outline-light me-2">
        Light
      </button>
      <button type="button" className="btn btn-outline-dark me-2">
        Dark
      </button>

      {/* Sizes */}
      <h3>Button Sizes</h3>
      <button type="button" className="btn btn-primary btn-lg me-2">
        Large
      </button>
      <button type="button" className="btn btn-secondary me-2">
        Normal
      </button>
      <button type="button" className="btn btn-success btn-sm me-2">
        Small
      </button>

      {/* Button Groups */}
      <h3>Button Groups</h3>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-secondary">
          Middle
        </button>
        <button type="button" className="btn btn-success">
          Right
        </button>
      </div>

      {/* Disabled Buttons */}
      <h3>Buttons - Disabled</h3>
      <button type="button" className="btn btn-primary me-2" disabled>
        Primary
      </button>
      <button type="button" className="btn btn-secondary me-2" disabled>
        Secondary
      </button>

      {/* Button as a Link */}
      <h3>Button as a Link</h3>
      <a href="#" className="btn btn-primary me-2">
        Primary Link
      </a>

      {/* Badges */}
      <h2>Badges</h2>

      <span className="badge bg-primary me-2">Primary</span>
      <span className="badge bg-secondary me-2">Secondary</span>
      <span className="badge bg-success me-2">Success</span>
      <span className="badge bg-danger me-2">Danger</span>
      <span className="badge bg-warning me-2">Warning</span>
      <span className="badge bg-info me-2">Info</span>
      <span className="badge bg-light me-2 text-dark">Light</span>
      <span className="badge bg-dark me-2">Dark</span>

      {/* Pill badges */}
      <h3>Badges - Pill</h3>
      <span className="badge rounded-pill bg-primary me-2">Primary</span>
      <span className="badge rounded-pill bg-secondary me-2">Secondary</span>
      <span className="badge rounded-pill bg-success me-2">Success</span>
      <span className="badge rounded-pill bg-danger me-2">Danger</span>
      <span className="badge rounded-pill bg-warning me-2">Warning</span>
      <span className="badge rounded-pill bg-info me-2">Info</span>
      <span className="badge rounded-pill bg-light me-2 text-dark">Light</span>
      <span className="badge rounded-pill bg-dark me-2">Dark</span>

      {/* Link badges */}
      <h3>Badges - Link</h3>
      <a href="#" className="badge bg-primary me-2">
        Primary
      </a>
      <a href="#" className="badge bg-secondary me-2">
        Secondary
      </a>
      <a href="#" className="badge bg-success me-2">
        Success
      </a>
      <a href="#" className="badge bg-danger me-2">
        Danger
      </a>
      <a href="#" className="badge bg-warning me-2">
        Warning
      </a>
      <a href="#" className="badge bg-info me-2">
        Info
      </a>
      <a href="#" className="badge bg-light me-2 text-dark">
        Light
      </a>
      <a href="#" className="badge bg-dark me-2">
        Dark
      </a>

      {/* Breadcrumbs */}
      <h2>Breadcrumbs</h2>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>

      {/* Cards */}
      <h2>Cards</h2>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some example text.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      {/* Dropdown */}
      <h2>Dropdowns</h2>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>

      {/* Bootstrap Form Elements */}
      <h2>Form Elements</h2>
      <form>
        {/* Text Input */}
        <div className="mb-3">
          <label htmlFor="exampleTextInput" className="form-label">
            Text Input
          </label>
          <input type="text" className="form-control" id="exampleTextInput" placeholder="Enter text" />
        </div>

        {/* Textarea */}
        <div className="mb-3">
          <label htmlFor="exampleTextarea" className="form-label">
            Textarea
          </label>
          <textarea className="form-control" id="exampleTextarea"></textarea>
        </div>

        {/* Checkbox */}
        <div className="mb-3">
          <input className="form-check-input" type="checkbox" id="exampleCheckbox" />
          <label className="form-check-label" htmlFor="exampleCheckbox">
            Checkbox
          </label>
        </div>

        {/* Radio Button */}
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadio1" value="option1" />
          <label className="form-check-label" htmlFor="exampleRadio1">
            Radio 1
          </label>
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadio2" value="option2" />
          <label className="form-check-label" htmlFor="exampleRadio2">
            Radio 2
          </label>
        </div>

        {/* Select Dropdown */}
        <div className="mb-3">
          <label htmlFor="exampleSelect" className="form-label">
            Select
          </label>
          <select className="form-select" id="exampleSelect">
            <option selected>Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

        {/* File Input */}
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            File Input
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>

        {/* Range Input */}
        <div className="mb-3">
          <label htmlFor="customRange1" className="form-label">
            Range Input
          </label>
          <input type="range" className="form-range" id="customRange1" />
        </div>
      </form>

      {/* List Group */}
      <h2>List Groups</h2>
      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>

      {/* Modals */}
      <h2>Modals</h2>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Some text for the modal.</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navs */}
      <h2>Navs</h2>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled" href="#" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Pagination */}
      <h2>Pagination</h2>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

      {/* Table */}
      <h2>Table</h2>
      {/* Basic Table */}
      <h3>Basic Table</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mary</td>
            <td>mary@example.com</td>
          </tr>
        </tbody>
      </table>

      {/* Striped Rows */}
      <h3>Striped Rows</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mary</td>
            <td>mary@example.com</td>
          </tr>
        </tbody>
      </table>

      {/* Bordered Table */}
      <h3>Bordered Table</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mary</td>
            <td>mary@example.com</td>
          </tr>
        </tbody>
      </table>

      {/* Hoverable Rows */}
      <h3>Hoverable Rows</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mary</td>
            <td>mary@example.com</td>
          </tr>
        </tbody>
      </table>

      {/* Dark Mode */}
      <h3>Dark Mode</h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mary</td>
            <td>mary@example.com</td>
          </tr>
        </tbody>
      </table>

      {/* Tabs */}
      <h2>Tabs</h2>
      <ul className="nav nav-tabs" id="myTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          This is Home tab content.
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          This is Profile tab content.
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          This is Contact tab content.
        </div>
      </div>

      {/* Typography */}
      <h2>Typography</h2>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>

      <h1>H1 Heading</h1>
      <h2>H2 Heading</h2>
      <h3>H3 Heading</h3>
      <h4>H4 Heading</h4>
      <h5>H5 Heading</h5>
      <h6>H6 Heading</h6>

      <p className="lead">This is a lead paragraph.</p>
      <p>This is a normal paragraph.</p>

      <small>This is a small text.</small>

      <blockquote className="blockquote">
        <p>A famous quote.</p>
        <footer className="blockquote-footer">Someone famous</footer>
      </blockquote>

      <ul className="list-unstyled">
        <li>Unstyled list item 1</li>
        <li>Unstyled list item 2</li>
      </ul>

      <ul className="list-inline">
        <li className="list-inline-item">Inline list item 1</li>
        <li className="list-inline-item">Inline list item 2</li>
      </ul>

      <mark>This part of text is marked for attention.</mark>

      <del>This part of text is deleted.</del>

      <strong>Bold Text</strong>

      <em>Italic Text</em>

      <abbr title="Abbreviation">abbr</abbr>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
