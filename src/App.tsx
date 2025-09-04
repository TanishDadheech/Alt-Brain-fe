
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import './index.css'

function App() {

  return (
    <>
      <Button variant='primary' text='Add Content' startIcon={<PlusIcon/>}></Button>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>


      <Card/>
    </>
  )
}

export default App
