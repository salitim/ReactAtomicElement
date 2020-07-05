module.exports = {
  components: './src/components/index.tsx',
  outputPath: './dist/playroom',
  title: 'Moleculus Design System',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
      <Span text="Hello world" />
    `,
  webpackConfig() {
    return {
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            include: __dirname,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
              },
            },
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    };
  },
};
