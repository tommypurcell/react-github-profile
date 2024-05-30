import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const extensions = ['.js', '.jsx']

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      interop: 'auto',
      banner: `'use client';`
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      interop: 'auto',
      banner: `'use client';`
    }
  ],
  plugins: [
    external({
      includeDependencies: true
    }),
    postcss({
      modules: true
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    resolve({
      extensions
    }),
    commonjs({
      include: 'node_modules/**',
      requireReturnsDefault: 'namespace'
    })
  ],
  external: ['react', 'react-dom', 'react-github-calendar'],
  onwarn(warning, warn) {
    if (
      warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
      warning.message.includes('use client')
    ) {
      return // Ignore the "use client" warning
    }
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return // Ignore THIS_IS_UNDEFINED warning
    }
    warn(warning)
  }
}
