
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import './index.css'

function App() {

  return (
    <>
    <div className="flex justify-end gap-4 pt-4">
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>
      <Button variant='primary' text='Add Content' startIcon={<PlusIcon/>}></Button>
    </div>
    <div className="flex flex-wrap justify-around gap-4 pt-4">
      <Card
        title="Project Ideas!"
        type="youtube"
        link="https://www.youtube.com/watch?v=vPRdY87_SH0"
      />

      <Card
        title="Cool Tweet"
        type="x"
        link="https://twitter.com/sekachov/status/1965471688818393152"
      />

       <Card
        title="Project Ideas!"
        type="youtube"
        link="https://www.youtube.com/watch?v=vPRdY87_SH0"
      />

      <Card
        title="Cool Tweet"
        type="x"
        link="https://twitter.com/sekachov/status/1965471688818393152"
      />

       <Card
        title="Project Ideas!"
        type="youtube"
        link="https://www.youtube.com/watch?v=vPRdY87_SH0"
      />

      <Card
        title="Cool Tweet"
        type="x"
        link="https://twitter.com/sekachov/status/1965471688818393152"
      />
    </div>

    </>
  )
}

export default App
