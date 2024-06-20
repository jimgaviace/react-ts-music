import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanner } from "@/pages/discover/c-pages/recommend/api";

export const fetchBannerDataAction = createAsyncThunk('banners', async() => { const res = await getBanner()
  console.log(res)
  return res.banners
})

// 创建一个slice

interface IRecommendState {
  banners: any[]
}
const initialState:IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
      bulider
      .addCase(fetchBannerDataAction.pending,() => {
        console.log('pending')
      })
      .addCase(fetchBannerDataAction.fulfilled,(state, { payload }) => {state.banners = payload
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected')
      })
    }
})

export default recommendSlice.reducer