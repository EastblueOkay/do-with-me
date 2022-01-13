import { Manual } from '@follow-me/types'
import { useState } from 'react'
import useStyles from './style'
import Title from './title'
import Item from '../comp/item'

interface StepsProps {
  data: Manual
  onBack: () => void
}

export default ({ data, onBack }: StepsProps) => {
  const { steps, title } = data
  const [active, setActive] = useState(0)
  const classes = useStyles()
  return (
    <div className={classes.steps}>
      <Title title={title} onBack={onBack} />
      <div className={classes.list}>
        {steps.map((step, index) => (
          <Item
            onClick={setActive}
            active={active === index}
            showIndex
            key={`${index}-${step.title}`}
            title={step.title}
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
