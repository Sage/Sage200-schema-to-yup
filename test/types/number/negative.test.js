const { createNumEntry, createSchema } = require("./_helpers");

describe("Negative number tests", () => {
  const entry = createNumEntry({ negative: true });
  const schema = createSchema(entry);

  test("Expect negative number to be truthy", () => {
    const valid = schema.isValidSync({
      value: -1
    });
    expect(valid).toBeTruthy();
  });

  test("Expect zero number to be falsy", () => {
    expect(schema.isValidSync({ value: 0 })).toBeFalsy();
  });

  test("Expect positive number to be falsy", () => {
    expect(schema.isValidSync({ value: 2 })).toBeFalsy();
  });
});
