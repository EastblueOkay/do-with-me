import rimraf from 'rimraf'

const dist = ['lib', 'es']
export default () => {
  dist.forEach((i) => rimraf.sync(i))
  console.log(`${dist.join(' & ')} has been removed`)
}
