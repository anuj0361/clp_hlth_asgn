const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a hash when partitionKey length is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: new Array(260).fill("1").toString(),
    });
    expect(trivialKey).toBe("a valid hash");
  });

  it("Returns the partitionKey when partitionKey length is less than MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "23" });
    expect(trivialKey).toBe("23");
  });

  it("Returns the hash when input is provided without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("a valid hash");
  });
});

describe("createHash", () => {
  it("Returns null when given no input", () => {
    const hash = createHash();
    expect(hash).toBe(null);
  });

  it("Returns null when input type is not string", () => {
    const hash = createHash(234);
    expect(hash).toBe(null);
  });

  it("Returns a hash when a valid input is provided", () => {
    const hash = createHash("23432432");
    expect(hash).toBe("a valid hash");
  });
});
