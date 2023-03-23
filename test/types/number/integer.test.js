const {createNumEntry, createSchema} = require("./_helpers");
const {buildYup} = require("../../../src");

describe("integer", () => {
  let schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://example.com/login.schema.json",
    title: "Number",
    description: "Number form",
    type: "object",
    required: ["startDate", "endDate"],
    properties: {
      "number": {
        "description": "Age of person",
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

  test("valid", () => {
    let valid
    valid = schema.isValidSync({
      number: 1
    });
    expect(valid).toBeTruthy();
  });

  test("invalid", () => {
    let valid
    valid = schema.isValidSync({
      number: 1.478
    });

    // valid = schema.validateSync({
    //   number: 1.478
    // });

    // console.log(JSON.stringify(schema));
    expect(valid).toBeFalsy();
  });
});
