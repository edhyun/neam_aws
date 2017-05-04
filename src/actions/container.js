export const dropped = (comp, idx) => ({
  type: "drop",
  comp,
  idx
})

export const addContainer = () => ({
  type: 'add'
})

export const emptyContainer = idx => ({
  type: 'empty',
  idx
})

export const deleteContainer = idx => ({
  type: 'delete',
  idx
})

export const toggleEditPanel = idx => ({
  type: 'toggleEditPanel',
  idx
})

export const incrementWidth = (idx) => ({
  type: 'incrementWidth',
  idx
})

export const decrementWidth = (idx) => ({
  type: 'decrementWidth',
  idx
})

export const onBodyUpdate = (idx, body) => ({
  type: "bodyUpdate",
  idx,
  body
})