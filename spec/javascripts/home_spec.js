describe("Tweet", function() {
  it("contains the twitter handle", function() {
    expect(Tweet()).toContain("@_weightd");
  });
});
