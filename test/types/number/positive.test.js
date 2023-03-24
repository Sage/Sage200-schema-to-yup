const { createNumEntry, createSchema } = require("./_helpers");

describe("Positive number tests", () => {
  const entry = createNumEntry({ positive: true });
  const schema = createSchema(entry);

  test("Expect negative number to be falsy", () => {
    const valid = schema.isValidSync({
      value: -1
    });
    expect(valid).toBeFalsy();
  });

  test("Expect zero to be falsy", () => {
    expect(schema.isValidSync({ value: 0 })).toBeFalsy();
  });

  test("Expect positive number to be truthy", () => {
    expect(schema.isValidSync({ value: 2 })).toBeTruthy();
  });
});
