import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import * as path from 'path';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
    },
  ],
  plugins: [
    json(),
    nodeResolve({ preferBuiltins: true, browser: true }),
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    }),
    babel(),
    commonjs(),
    typescript(),
    terser(),
    copy({
      targets: [
        {
          src: 'src/recorder/AudioRecorder/recorder.worklet.js',
          dest: 'dist',
        },
      ],
    }),
  ],
  onwarn: function (warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }

    // console.warn everything else
    console.warn(warning.message);
  },
};
