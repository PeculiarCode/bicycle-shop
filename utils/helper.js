export const isEmpty = obj => {
  // debugger
  if (obj == null || obj == 'undefined' || obj == 'null') {
    return true
  }
  if (typeof obj == 'object' && Object.keys(obj).length === 0) {
    return true
  }
  if (typeof obj == 'string' && obj.trim().length === 0) {
    return true
  }
  return false
}