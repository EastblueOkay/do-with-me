import { execSync } from 'child_process'
import path from 'path'

/**
 * 使用 SWC 完成 lib&es 的打包
 */
export default () => {
  ;['lib', 'es'].forEach((type) => {
    const swc = path.join(__dirname, '../node_modules/.bin/swc')
    const confPath = path.join(__dirname, `.${type}.swcrc`)
    const cmd = `${swc} src -d ${type} --copy-files --config-file ${confPath}`
    execSync(cmd)
  })
}
