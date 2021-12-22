import { execSync } from 'child_process'
import path from 'path'

/**
 * 使用 tsc 完成 d.ts 声明文件的生成
 */
export default () => {
  const tsc = path.join(__dirname, '../node_modules/.bin/tsc')
  const copyfiles = path.join(__dirname, '../node_modules/.bin/copyfiles')
  const cmd = `${tsc} --declaration --emitDeclarationOnly && \
    ${copyfiles} -u 1 lib/*.d.ts lib/**/*.d.ts es
  `
  execSync(cmd)
}
