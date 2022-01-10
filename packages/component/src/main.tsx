import { useState } from 'react'
import Menu from './menu'
import Steps from './steps'
import Modal from './comp/modal'

export default () => {
  const [current, setCurrent] = useState(true)
  return (
    <Modal visible>
      {current ? <Steps /> : <Menu onChange={setCurrent} />}
    </Modal>
  )
}
