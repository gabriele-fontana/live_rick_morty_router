import { NavLink } from "react-router-dom";

import menu from '../data/menu'

export default function AppHeader(){


  return (

    <header>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">Rick & Morty</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              {menu.map(item => (
                <li className="nav-item" key={item.id}>
                  <NavLink className="nav-link" to={item.url} aria-current="page">{item.text}</NavLink>
                </li>

              ))}

            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </header>
  )
}