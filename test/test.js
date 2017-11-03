var assert = require("chai").assert;
var check = require("../lib/check");

describe("Luhn", function() {
  it("should return true if number is a number string of the right length", function() {
    var number = "4916572176966573";
    var result = check(number);
    assert.isTrue(result);
  });

  it("should return false if string is the wrong length", function() {
    var number = "491657217696657";
    assert.isFalse(check(number));
  });

  it("should return false if value is a string but not numbers", function() {
    var number = "first and last name"
    assert.isFalse(check(number));
  });
});

