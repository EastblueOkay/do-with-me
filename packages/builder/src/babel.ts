import babelConf from './babel.config'
import { execSync } from 'child_process'

export default () => {
  const pwd = process.cwd()
  console.log(pwd)
  // execSync(`npx babel`)
}
