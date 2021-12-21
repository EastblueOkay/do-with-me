import { execSync } from 'child_process'
import path from 'path'

export default () => {
  const sourceDir = path.join(process.cwd(), 'src')
  const destDir = path.join(process.cwd(), 'lib')
  const cmd = `npx babel --out-dir ${destDir} ${sourceDir} --extensions ".ts,.tsx" --config-file ./babel.config.lib`
  execSync(cmd, { cwd: __dirname })
}
