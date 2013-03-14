describe("Tweet", function() {
  it("contains the twitter handle", function() {
    function Tweet() {
      return "@_w";
    }

    expect(Tweet()).toContain("@_weightd");
  });
});
