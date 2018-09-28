require("./index");

test('Trymifies strings', function() {
    var caseOne = "This is a string";
    var caseTwo = "Th15 i5 4 5tr1ng";
    var caseThree = "T!h!i!s! !i!s! !a! !s!t!r!i!n!g";

    expect(caseOne.trym()).toBe("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
    expect(caseTwo.trym()).toBe("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
    expect(caseThree.trym()).toBe("🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔");
});
