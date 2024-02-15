import { Header } from './Components/index'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main className='min-h-screen pt-[4.5rem]'>
        <Outlet />
      </main>
    </>
  )
}

export default App
