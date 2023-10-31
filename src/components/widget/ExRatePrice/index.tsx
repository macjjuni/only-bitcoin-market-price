import { BiSolidDollarCircle, BiWon } from 'react-icons/bi'
import ChipItem from '@/components/Chip'
import { useBearStore } from '@/zustand/store'
import { comma } from '@/utils/common'

const iconSize = 18

const label = () => {
  return (
    <>
      <BiSolidDollarCircle size={iconSize} />
      <span>/</span>
      <BiWon size={iconSize} />
    </>
  )
}

const ExRatePrice = ({ onClick }: { onClick: () => void }) => {
  const { basePrice } = useBearStore((state) => state.exRate)

  return <ChipItem onClick={onClick} label={label()} value={comma(basePrice?.toString())} />
}

export default ExRatePrice