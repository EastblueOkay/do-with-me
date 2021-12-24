import yargs, { exit } from 'yargs'
import chokidar from 'chokidar'
import { hideBin } from 'yargs/helpers'
import convert from './conver'
import declara from './declara'
import clean from './clean'

interface Args {
  clean: boolean
  watch: boolean
}

const argv = yargs(hideBin(process.argv)).argv as any as Args

if (argv.clean) {
  clean()
  process.exit()
}

clean()
convert()
declara()

if (argv.watch) {
  const watcher = chokidar.watch(['src/**/*.ts', 'src/**/*.tsx'], {
    ignoreInitial: true,
  })
  watcher.on('all', () => {
    console.log('⛰ building...')
    convert()
    declara()
    console.log('⛰ builded')
  })
}
