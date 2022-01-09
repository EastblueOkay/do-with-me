import classname from 'clsx'
import useStyles from './style'

const paths = {
  search: [
    'M432 96C617.568 96 768 246.432 768 432c0 81.408-28.96 156.064-77.12 214.208l0.736 0.512 3.008 2.656 181.024 181.024a32 32 0 0 1-42.24 47.904l-3.008-2.656-181.024-181.024a32.256 32.256 0 0 1-3.2-3.744A334.496 334.496 0 0 1 432 768C246.432 768 96 617.568 96 432S246.432 96 432 96z m0 64a272 272 0 0 0 0 544 270.4 270.4 0 0 0 165.152-55.872l8.192-6.528 19.872-16.512 16.384-19.712a270.432 270.432 0 0 0 62.208-162.688L704 432A272 272 0 0 0 432 160z',
  ],
  step: [
    'M270.4 224c-122.24 4.16-247.36 118.4-166.72 455.36 120.32-59.84 270.08-51.84 312.32-48A356.48 356.48 0 0 0 461.12 448c-16.64-178.88-115.84-228.48-190.72-224z m137.28 528c-56.64-5.76-192-5.12-277.76 51.52 2.56 16.64 5.76 36.8 9.6 64A138.88 138.88 0 0 0 304 992c109.76-11.84 133.76-69.44 121.28-152.96a469.12 469.12 0 0 1-17.6-88z m250.88-192a469.44 469.44 0 0 1-18.56 87.36c-12.48 83.2 11.84 141.12 121.28 152.96A138.88 138.88 0 0 0 928 675.2c3.84-26.24 7.04-46.72 9.6-64-85.44-56.32-222.4-56.96-278.72-50.88zM796.16 32c-74.88-3.2-174.08 46.08-192 224a356.48 356.48 0 0 0 45.12 184c42.24-3.84 192-11.52 312.32 48.32C1042.56 155.84 919.04 37.44 796.16 32z',
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
