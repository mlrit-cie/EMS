import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Calendar from './pages/Calendar'
import Activity from './pages/Activity'
import Login from './pages/Login'
import PersonalInfo from './pages/PersonalInfo'
import Interests from './pages/Interests'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/info" element={<PersonalInfo />} />
      <Route path="/signup/interests" element={<Interests />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
