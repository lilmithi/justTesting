// import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./components/Admin/Dashboard";
import NavBar from "./components/Admin/NavBar";
import Users from "./components/Admin/Users";
import Events from "./components/Admin/Events";
import Profile from "./components/Admin/Profile";
import AdminLogin from "./components/User/AdminLogin";
import getData from "./API";
import Notifications from "./components/Admin/Notifications";
import LandingPage from "./components/User/Landing Page/LandingPage";
import EventsPage from "./components/User/Events Page/EventsPage";

function App() {
  const [hidden, setHidden] = useState(true);
  const [clients, setClients] = useState([]);
  const [events, setEvents] = useState([]);
  const [deleting, setIsDeleting] = useState(false);
  function handleHide() {
    setHidden(!hidden);
  }
  useEffect(() => {
    getData("/clients").then((data) => setClients(() => data));
    getData("/events").then((data) => setEvents(() => data));
    // console.log(clients);
  }, [deleting]);

  function handleDelete(id) {
    setIsDeleting(() => !deleting);
    fetch(`/clients/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setIsDeleting(() => !deleting);
  }

  return (
    <div className="App font-Nunito">
      <Switch>
        <Route exact path="/admin/users">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Users clients={clients} handleDelete={handleDelete} />
        </Route>
        <Route exact path="/admin/events">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Events events={events} />
        </Route>
        <Route exact path="/admin/profile">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Profile />
        </Route>
        <Route exact path="/admin/notifications">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Notifications />
        </Route>
        <Route exact path="/adminLogin">
          <AdminLogin />
        </Route>
        <Route exact path="/admin">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Dashboard clients={clients} events={events} />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
