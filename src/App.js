import React from "react";

import Root from "./Root";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Employers from "./pages/Employers";
import Contact from "./pages/Contact";
import Enrollment from "./pages/Enrollment";
import StateAgencyEmployees from "./pages/StateAgencyEmployees";
import AdministrativeLetters from "./pages/AdministrativeLetters";
import CarriersInfoGrid from "./pages/CarriersInfoGrid";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import DomesticPartnership from "./pages/DomesticPartnership";
import POPwaivers from "./pages/POPwaivers";
import QualifyingEventState from "./pages/QualifyingEventState";
import QualifyingEventLPB from "./pages/QualifyingEventLPB";
import LocalPublicBodyEmployees from "./pages/LocalPublicBodyEmployees";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='admin-letters' element={<AdministrativeLetters />} />
      <Route path='domestic-partnership' element={<DomesticPartnership />} />
      <Route path='employees' element={<Employees />} />
      <Route path='employers' element={<Employers />} />
      <Route path='enrollment' element={<Enrollment />} />
      <Route path='contact' element={<Contact />} />
      <Route path='lpb-employees' element={<LocalPublicBodyEmployees />} />
      <Route path='state-agency-employees' element={<StateAgencyEmployees />} />
      <Route path='pop-waivers' element={<POPwaivers />} />
      <Route path='qualifying-event-state' element={<QualifyingEventState />} />
      <Route path='qualifying-event-lpb' element={<QualifyingEventLPB />} />
      <Route path='benefits-info' element={<CarriersInfoGrid />} />

      <Route path='share' element={<div>employeePortalSub3 (SHARE)</div>} />

      <Route
        path='term-life-calculator'
        element={<div>TermLifePremiumCal.html</div>}
      />
      <Route
        path='benefits-calculator'
        element={<div>ViewPremiumCal.html</div>}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
