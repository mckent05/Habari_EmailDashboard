import react from "react";

const SideContent = () => (
  <ul className="nav flex-column p-2">
    <li className="nav-item">
      <a className="nav-link active" href="#">
        Analytics
      </a>
    </li>

    <li className="nav-item">
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#businessMenu"
        aria-expanded="false"
      >
        Business
      </a>
      <div className="collapse" id="businessMenu">
        <ul className="nav flex-column">
          <li>
            <a className="nav-link" href="#">
              Project
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              HRM
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Mobile App
            </a>
          </li>
        </ul>
      </div>
    </li>

    <li className="nav-item">
      <a
        className="nav-link"
        data-bs-toggle="collapse"
        href="#appsMenu"
        aria-expanded="true"
      >
        Apps
      </a>
      <div className="collapse show" id="appsMenu">
        <ul className="nav flex-column">
          <li>
            <a className="nav-link active" href="#">
              Calendar
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Email
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Invoice
            </a>
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a className="nav-link" href="#">
        Charts
      </a>
    </li>
    <li>
      <a className="nav-link" href="#">
        Widgets
      </a>
    </li>
    <li>
      <a className="nav-link" href="#">
        Users
      </a>
    </li>
    <li>
      <a className="nav-link" href="#">
        Documentation
      </a>
    </li>
  </ul>
);

export default SideContent
