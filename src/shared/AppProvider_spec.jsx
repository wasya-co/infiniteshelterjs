

describe('AppProvider', () => {
  it('renders', () => {
    const w = mount(<AppProvider >
      <h1>Hello, world!</h1>
    </AppProvider>)
    expect(w).toBeTruthy()
  })
})

