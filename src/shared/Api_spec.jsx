
import {
  C,
  logg,
} from "$shared"
import useApi from './Api'

const api = useApi()

describe('Api', () => {

  it('getMyAccount - current2 ', async () => {
    const result = await api.getMyAccount()
    expect(result).toEqual(C.anonUser)
    await act(() => new Promise(setImmediate))
  })

})