import { RollupOptions } from "rollup";
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { resolve} from 'path'

const rsv = (path:string)=>resolve(__dirname,path)
export default {
    input: rsv('./src/index.ts'),
    output:[{
        format: 'cjs',
        file: rsv('./lib/index.cjs.js')
    },{
        format: 'esm',
        file: rsv('./lib/index.esm.js')
    }],
    plugins:[nodeResolve(),typescript({ tsconfig: './tsconfig.json' })]
} as RollupOptions