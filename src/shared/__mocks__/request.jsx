
const _request = jest.createMockFromModule('request')

const request = () => {
  console.log(arguments, 'fakeRequest')
  _request(arguments)
}

module.exports = request
