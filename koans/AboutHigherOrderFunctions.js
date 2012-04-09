var dojox; //globals
var df = dojox.lang.functional;    

describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = df.filter(numbers, "x % 2 !== 0");
    
    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });
    
  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = df.map(numbers, "x + 1");
    
    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  }); 
    
  it("should use 'reduce' to update the same result on each iteration ", function () {
    var numbers = [1, 2, 3];
    var reduction = df.reduce(numbers, "result + x");
    
    expect(reduction).toBe(6); 
    expect(numbers).toEqual([1, 2, 3]);
  });
    
  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    df.forEach(numbers, isEven);
    
    expect(msg).toEqual('falsetruefalse');
    expect(numbers).toEqual([1, 2, 3]);
  });
    
  it("should use 'some' to apply until true", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += item + ";";
      return (item % 2) === 0;
    };
   
    expect(numbers.some(isEven)).toBeTruthy(true);
    expect(msg).toEqual("1;2;");
  });
    
  it("should use 'every' to applies until first false" , function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += item + ";";
      return (item % 2) === 0;
    };
    
    expect(numbers.every(isEven)).toBeFalsy(false);
    expect(msg).toBe("1;");
  });
});

