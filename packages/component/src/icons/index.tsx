import useStyles from './style'
import classname from 'clsx'

const paths = {
  search: [
    'M432 96C617.568 96 768 246.432 768 432c0 81.408-28.96 156.064-77.12 214.208l0.736 0.512 3.008 2.656 181.024 181.024a32 32 0 0 1-42.24 47.904l-3.008-2.656-181.024-181.024a32.256 32.256 0 0 1-3.2-3.744A334.496 334.496 0 0 1 432 768C246.432 768 96 617.568 96 432S246.432 96 432 96z m0 64a272 272 0 0 0 0 544 270.4 270.4 0 0 0 165.152-55.872l8.192-6.528 19.872-16.512 16.384-19.712a270.432 270.432 0 0 0 62.208-162.688L704 432A272 272 0 0 0 432 160z',
  ],
}

export interface Props {
  name: keyof typeof paths
  className?: string
}

export default ({ name, className }: Props) => {
  const classes = useStyles()
  const path = paths[name]
  return (
    <i className={classname(classes.icon, className)}>
      <svg viewBox="0 0 1024 1024">
        {path.map((p, i) => (
          <path key={i} d={p} />
        ))}
      </svg>
    </i>
  )
}