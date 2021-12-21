import { execSync } from 'child_process'
import path from 'path'

export default () => {
  const sourceDir = path.join(process.cwd(), 'src')
  const destDir = path.join(process.cwd(), 'es')
  const cmd = `npx babel --out-dir ${destDir} ${sourceDir} --extensions ".ts,.tsx" --config-file ./babel.config.es`
  execSync(cmd, { cwd: __dirname })
}
