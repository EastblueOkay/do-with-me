import { useState, useCallback } from 'react'
import Menu from './menu'
import Steps from './steps'
import Modal from './comp/modal'
import { Props } from './type'

export default (props: Props) => {
  const { data } = props
  const [index, setIndex] = useState<number>()
  const currentManual = data?.[index]

  const onBack = useCallback(() => {
    setIndex(undefined)
  }, [setIndex])

  return (
    <Modal visible>
      {currentManual ? (
        <Steps data={currentManual} onBack={onBack} />
      ) : (
        <Menu data={props.data} onChange={setIndex} />
      )}
    </Modal>
  )
}
