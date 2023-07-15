import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IBtc {
  krw: number
  krwTime: string
  usd: number
  usdTime: string
}

interface IUpdateKRW {
  krw: number
  krwTime: string
}

interface IUpdateUSD {
  usd: number
  usdTime: string
}

export type KrwType = 'KRW'
export type UsdType = 'USD'
export type KrwUsdType = 'KRW/USD'
export type MarketType = KrwType | UsdType | KrwUsdType

interface BearState {
  market: MarketType
  setMarket: (market: MarketType) => void
  btc: IBtc // BTC 시세 정보
  amount: string // BTC 개수 Input 값
  isShow: boolean // 아코디언 토글
  isEcoSystem: boolean // 비트코인 생태계 표시 여부
  // theme: 'dark' | 'light'
  setAmount: (by: string) => void
  updateKRW: (by: IUpdateKRW) => void
  updateUSD: (by: IUpdateUSD) => void
  toggleAcc: (flag: boolean) => void
  toggleEco: (flag: boolean) => void
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      market: 'KRW/USD',
      setMarket: (market: MarketType) => set(() => ({ market })),
      btc: {
        krw: 0,
        krwTime: '',
        usd: 0,
        usdTime: '',
      },
      amount: '1',
      isShow: true,
      isEcoSystem: false,
      isSetting: false,
      // theme: 'light',
      setAmount: (price) => set(() => ({ amount: price })),
      updateKRW: (krw) =>
        set((state) => ({
          btc: { ...state.btc, ...krw },
        })),
      updateUSD: (usd) =>
        set((state) => ({
          btc: { ...state.btc, ...usd },
        })),
      toggleAcc: (flag) => set(() => ({ isShow: flag })),
      toggleEco: (flag) => set(() => ({ isEcoSystem: flag })),
    }),
    { name: 'bear-storage' } // persist key
  )
)
