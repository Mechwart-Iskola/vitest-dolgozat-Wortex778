function fakt(n) {
    if (n < 0) {
      throw new Error("Error: Factorial is not defined fornegative numbers");
    }
    if (n === 0) return 1;
    let eredmeny = 1;
    for (let i = 1; i <= n; i++) {
      eredmeny *= i;
    }
    return eredmeny;
  }

  function hosszuszo(mondat) {
    if (!mondat.trim()) return "";
    const szavak = mondat.split(" ");
    let max = "";
    for (let szo of szavak) {
      if (szo.length > max.length) max = szo;
    }
    return max;
  }

  function maganhangzok(szoveg) {
    const mh = "aeiou";
    let szam = 0;
    for (let c of szoveg.toLowerCase()) {
      if (mh.includes(c)) szam++;
    }
    return szam;
  }

  function reszhalmaz(e, nagyobb) {
    for (let kulcs in e) {
      if (nagyobb[kulcs] !== e[kulcs]) return false;
    }
    return true;
  }

  function kozosObjektumok(arr1, arr2) {
    const eredmeny = [];
    for (let obj1 of arr1) {
      for (let obj2 of arr2) {
        if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
          eredmeny.push(obj1);
        }
      }
    }
    return eredmeny;
  }
  
  describe("faktorial", () => {
    it("5! = 120", () => {
      expect(fakt(5)).toBe(120);
    });
    it("3! = 6", () => {
      expect(fakt(3)).toBe(6);
    });
    it("0! = 1", () => {
      expect(fakt(0)).toBe(1);
    });
    it("Negativ szam", () => {
      expect(() => fakt(-3)).toThrow("Error: Factorial is not defined fornegative numbers");
    });
  });
  
  describe("Find longest word", () => {
    it("'The quick brown fox jumps...' -> 'jumps'", () => {
      expect(hosszuszo("The quick brown fox jumps over the lazy dog")).toBe("jumps");
    });
    it("'Hello' -> 'Hello'", () => {
      expect(hosszuszo("Hello")).toBe("Hello");
    });
    it("Üres mondat -> ''", () => {
      expect(hosszuszo("")).toBe("");
    });
    it("'  Egy   teszt   mondat  ' -> 'teszt'", () => {
      expect(hosszuszo("  Egy   teszt   mondat  ")).toBe("teszt");
    });
  });
  
  describe("Count Vowels", () => {
    it("'Normal szoveg' -> 3", () => {
      expect(maganhangzok("Hello World")).toBe(3);
    });
    it("'Csak massalhagzok' -> 0", () => {
      expect(maganhangzok("bcdfg")).toBe(0);
    });
    it("'Vegyes kis es nagybetuk' -> 5", () => {
      expect(maganhangzok("AeIoU")).toBe(5);
    });
    it("Ures szoveg -> 0", () => {
      expect(maganhangzok("")).toBe(0);
    });
  });
  
  describe("IsSubset", () => {
    it("{a: 1} a {a: 1, b: 2} reszhalmaza", () => {
      expect(reszhalmaz({ a: 1 }, { a: 1, b: 2 })).toBe(true);
    });
    it("{c: 3} nem rezshalmaza {a: 1, b: 2}", () => {
      expect(reszhalmaz({ c: 3 }, { a: 1, b: 2 })).toBe(false);
    });
  });
  
  describe("Kozos objektumok vannak", () => {
    it("Kozos: [{ id: 2, name: 'Bob' }]", () => {
      expect(
        kozosObjektumok(
          [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
          [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
        )
      ).toEqual([{ id: 2, name: "Bob" }]);
    });
    it("Nincsenek koyos objektumok", () => {
      expect(
        kozosObjektumok([{ id: 1, name: "Alice" }], [{ id: 3, name: "Charlie" }])
      ).toEqual([]);
    });
    it("ures tombok", () => {
      expect(kozosObjektumok([], [])).toEqual([]);
    });
    it("egyik tomb ures", () => {
      expect(kozosObjektumok([{ id: 1, name: "Alice" }], [])).toEqual([]);
    });
  });
