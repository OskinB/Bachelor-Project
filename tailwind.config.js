module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './slices/**/*.vue', './pages/**/*.vue'],
  theme: {
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        teal: 'rgba(0, 128, 128, 1)', // Primary
        peach: 'rgba(255, 180, 140, 1)', // background
        green: 'rgba(76, 176, 175, 1)', // background
        lightgrey: 'rgba(236, 240, 238, 1)', // background
        grey: 'rgba(103, 103, 103, 1)', // background
        darkgrey: 'rgba(51, 51, 51, 1)', // background
        lightgreyFilter: 'rgba(236, 240, 238, 0.8)', // filter
        darkgreyFilter: 'rgba(51, 51, 51, 0.9)', // filter
        whiteText: 'rgba(254, 254, 254, 1)', // Text
        blackText: 'rgba(34, 34, 34, 1)', // Text
      },
      maxWidth: {
        contentMax: '1248px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
