import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maribePrimary: {
          amareloTarsila: '#E2AF58',
          azulMar: '#C9D4D9',
          begeDelicado: '#FCFCFA',
          verdeMosaico: '#9DA882',
          vermelhoRecife: '#C56E51',
        },
        maribeSecundary: {
          azulRio: '#E2E8EB',
          cinzaElegante: '#3C3C3B',
          rosaRetro: '#E2B79F',
        },
      },
    },
  },
  plugins: [],
}
export default config
