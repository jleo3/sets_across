describe("Tweet", function() {
  it("contains the twitter handle", function() {
    expect(ComposeTweet()).toContain("My Workout: ");
    expect(ComposeTweet()).toContain("@_weightd");
  });
});
