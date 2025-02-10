import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { env } from 'process';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const isTest262 = !!env.TEST262;
const libName = 'temporal';

const replaceConfig = { exclude: 'node_modules/**', preventAssignment: true };
const resolveConfig = { preferBuiltins: false };

export default [
  {
    input: 'lib/shim.mjs',
    plugins: [
      replace({ ...replaceConfig, __debug__: false, __isTest262__: isTest262 }),
      commonjs(),
      nodePolyfills(),
      resolve(resolveConfig),
      terser({
        compress: {
          passes: 2
        },
        format: {
          comments: false,
          ascii_only: true
        }
      })
    ],
    output: {
      name: libName,
      file: 'script.js',
      format: 'iife',
      sourcemap: true
    }
  }
];
