const genarateToken = (value) => {
  if (value === 'Bearer is_customer') return 2
  else if (value === 'Bearer is_admin') return 1
  else return null
}

module.exports = { genarateToken }
