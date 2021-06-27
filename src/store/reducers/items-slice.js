import { createSlice } from '@reduxjs/toolkit';

import itemData from '../../data/product-data';

const itemsSlice = createSlice({
  name: 'items',
  initialState: itemData,
});

export default itemsSlice.reducer;
