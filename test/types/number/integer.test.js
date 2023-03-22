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
        "type": "integer",
        "moreThan": 0,
        "max": 130,
        "default": 32,
        "required": false,
        "nullable": true
      }
    },
  };

  schema = buildYup(schema, {});

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
      value: 1.478
    });
    expect(valid).toBeFalsy();
  });
});
