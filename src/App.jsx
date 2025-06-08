import Header from '../components/Header.jsx'
import Entry from "../components/Entry.jsx"
import dates from '../dates.jsx'

export default function App() {
  const entryElements = dates.map(date => (
    <Entry
      key = {date.id}
      {...date}
    />
  ))

  return (
    <div className="project-container">
      <Header />
      {entryElements}
    </div>
  )
}