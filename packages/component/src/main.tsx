import { useState } from 'react'
import Menu from './menu'
import Steps from './steps'
import Modal from './comp/modal'
import { Props } from './type'

export default (props: Props) => {
  const [index, setIndex] = useState<number>()
  return (
    <Modal visible>
      {index >= 0 ? <Steps /> : <Menu onChange={setIndex} />}
    </Modal>
  )
}
