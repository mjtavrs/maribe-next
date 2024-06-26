import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

const sourceCodePro400 = Source_Sans_3({ weight: '400', subsets: ['latin'] })
const sourceCodePro600 = Source_Sans_3({ weight: '600', subsets: ['latin'] })
const allRoundGothic = localFont({
  src: './AllRoundGothic-Lig.otf',
  variable: '--all-round-gothic',
})

export { sourceCodePro400, sourceCodePro600, allRoundGothic }
