require("./index");

test('Trymifies strings', function() {
    const caseOne = "This is a string";
    const caseTwo = "Th15 i5 4 5tr1ng";
    const caseThree = "T!h!i!s! !i!s! !a! !s!t!r!i!n!g";

    expect(caseOne.trym()).toBe("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
    expect(caseTwo.trym()).toBe("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
    expect(caseThree.trym()).toBe("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
});

test('Allows roasted sweet potato', function() {
    const key = "roasted";
    const caseOne = "This is a string";
    const caseTwo = "Th15 i5 4 5tr1ng";
    const caseThree = "T!h!i!s! !i!s! !a! !s!t!r!i!n!g";

    expect(caseOne.trym(key)).toBe("🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠");
    expect(caseTwo.trym(key)).toBe("🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠");
    expect(caseThree.trym(key)).toBe("🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠");
});
