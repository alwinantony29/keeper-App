import Header from './Components/Header'
import Footer from './Components/Footer'
import Note from './Components/Note'

function App() {
  const notes = [
    {
      key: 1,
      title: "Delegation",
      content: "How many programmers does it take to change a light bulb? None its a hardware problem"
    },
    {
      key: 2,
      title: "Loops ",
      content: "how to keep a programmer in a shower forever?show him the shampoo bottle instructions : Lather Rinse Repeat  "
    },
    {
      key: 3,
      title: "Arrays",
      content: "Why did the programmer quit his job?Because he didn't get arrays"
    }
  ]

  return (
    <>
      <Header />
      {notes.map(data => {
        return (<Note title={data.title} content={data.content} />)
      })}
      <Footer />
    </>
  )
}

export default App
