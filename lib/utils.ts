//Utility functions for the app

export const truncateString = (str: string): string => {
  if (str.length > 20) {
    return str.substring(0, 15) + '...'
  } else {
    return str
  }
}
