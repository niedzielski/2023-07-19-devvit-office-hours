describe('important tests for today', () => {
  it('abc', () => {
    expect({}).toEqual({})
  })
  
  test('test how snapshots work', () => {
    expect(thingy()).toMatchInlineSnapshot(`
      {
        "a": 1,
        "b": 2,
        "c": 3,
      }
    `)
  })
})




function thingy() {
  return {
    a: 1,
    b: 2,
    c: 4
  }
}