require("./helpers.js");

const { expect } = require("chai");
const fs = require("fs");
const path = require("path");

const js = fs.readFileSync(path.resolve(__dirname, "..", "index.js"), "utf-8");

describe("index.js", function () {
  describe("companyName", function () {
    it("is set as Scuber", function () {
      expect(companyName).to.equal("Scuber");
    });

    it("is defined as a const", function () {
      expect(js).to.match(
        /const companyName/,
        "Expected companyName to be a const"
      );
    });
  });

  describe("mostProfitableNeighborhood", function () {
    it("is declared as equal to Chelsea", function () {
      expect(mostProfitableNeighborhood).to.equal("Chelsea");
    });

    it("is defined using let", function () {
      expect(js).to.match(
        /let mostProfitableNeighborhood/,
        "Expected mostProfitableNeighborhood to be defined using let"
      );
    });
  });

  describe("companyCeo", function () {
    it("is declared as equal to Susan Smith", function () {
      expect(companyCeo).to.equal("Susan Smith");
    });

    it("is defined using let", function () {
      expect(js).to.match(
        /let companyCeo/,
        "Expected companyCeo to be defined using let"
      );
    });
  });

  describe("foundedYear", function () {
    it("is set to 1998", function () {
      expect(foundedYear).to.equal(1998);
    });
    it("is defined using const", function () {
      expect(js).to.match(
        /const foundedYear/,
        "Expected foundedYear to be defined using const"
      );
    });
  });

  describe("currentCEO", function () {
    it("is initially set to Susan Smith", function () {
      expect(currentCEO).to.equal("Susan Smith");
    });
    it("is defined using let", function () {
      expect(js).to.match(
        /let currentCEO/,
        "Expected currentCEO to be defined using let"
      );
    });
  });

  describe("employeeCount", function () {
    it("is a number", function () {
      expect(employeeCount).to.be.a("number");
      expect(employeeCount).to.equal(500);
    });
  });
  describe("isHiring", function () {
    it("is a boolean and true", function () {
      expect(isHiring).to.be.a("boolean");
      expect(isHiring).to.be.true;
    });
  });
  describe("companyLocation", function () {
    it("is an object with city and state", function () {
      expect(companyLocation).to.be.an("object");
      expect(companyLocation).to.have.all.keys("city", "state");
      expect(companyLocation.city).to.equal("New York");
      expect(companyLocation.state).to.equal("NY");
    });
  });
  describe("departments", function () {
    it("is an array of departments", function () {
      expect(departments).to.be.an("array");
      expect(departments).to.include.members(["Engineering", "HR", "Sales"]);
    });
  });
  describe("legacySystem", function () {
    it("is defined using var", function () {
      expect(js).to.match(
        /var legacySystem/,
        "Expected legacySystem to be declared with var"
      );
    });
    it("is set to true", function () {
      expect(legacySystem).to.be.true;
    });
  });
});
