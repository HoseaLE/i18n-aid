import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";

export default {
  input: './index.js',
  output: {
    file:"bundle.js",
    format:"cjs"
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser()
  ]
}