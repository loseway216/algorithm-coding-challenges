import medianOfStream from "./medianOfStream";

describe("find the median of a stream", () => {
  it("should return the median of the stream", () => {
    const medianOfAStream = new medianOfStream();
    medianOfAStream.insertNum(3);
    medianOfAStream.insertNum(1);
    // expect(medianOfAStream.findMedian()).toEqual(2);
    medianOfAStream.insertNum(5);
    // expect(medianOfAStream.findMedian()).toEqual(3);
    medianOfAStream.insertNum(4);
    expect(medianOfAStream.findMedian()).toEqual(3.5);
  });
});
