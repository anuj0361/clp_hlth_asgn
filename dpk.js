const crypto = require("crypto");

//made a function for creating hash
const createHash = (data) => {
  if (typeof data !== "string" || !data) {
    return null;
  }

  return crypto.createHash("sha3-512").update(data).digest("hex");
};

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = event
    ? event.partitionKey
      ? event.partitionKey
      : createHash(JSON.stringify(event))
    : undefined;

  // this will also check the undefined case, if candidate did not exist then its type will be undefind
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  //here we can check if candidate exist or not
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }

  return candidate;
};
