const {createNumEntry, createSchema} = require("./_helpers");
const {buildYup} = require("../../../src");

describe("Integer tests (type number with integer constraint)", () => {
  let schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://example.com/login.schema.json",
    title: "Number",
    description: "Number form",
    type: "object",
    properties: {
      "number": {
        "type": "number",
        "integer": true,
      }
    },
  };

  schema = buildYup(schema, {
    errMessages: {
      number: {
        positive: "Must be positive",
      }
    },
    // logging: true,
  });

  test("Expect integer to be truthy", () => {
    let valid
    valid = schema.isValidSync({
      number: 1
    });
    expect(valid).toBeTruthy();
  });

  test("Expect float to be falsy", () => {
    let valid
    valid = schema.isValidSync({
      number: 1.478
    });
    expect(valid).toBeFalsy();
  });
});

describe("Integer tests (type integer)", () => {
  let schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://example.com/login.schema.json",
    title: "Number",
    description: "Number form",
    type: "object",
    properties: {
      "number": {
        "type": "integer",
      }
    },
  };

  schema = buildYup(schema, {
    errMessages: {
      number: {
        positive: "Must be positive",
      }
    },
    // logging: true,
  });

  test("Expect integer to be truthy", () => {
    let valid
    valid = schema.isValidSync({
      number: 1
    });
    expect(valid).toBeTruthy();
  });

  test("Expect float to be falsy", () => {
    let valid
    valid = schema.isValidSync({
      number: 1.478
    });
    expect(valid).toBeFalsy();
  });
});
