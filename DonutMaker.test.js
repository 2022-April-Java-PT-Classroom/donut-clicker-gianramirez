import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {

    test("should be able to add a donut and retrieve the total count", () => {
        // Arrange
        const underTest = new DonutMaker(0);
        // Act
        underTest.addDonut();
        // Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () => {
        // Arrange
        const underTest = new DonutMaker(100, 0);
        // Act
        underTest.addAutoclicker();
        // Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", ()=> {
        const underTest = new DonutMaker(99, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);
    });

    test("should increase the cost of autoclicker with purchase of autoclicker", ()=> {
        const underTest = new DonutMaker(100, 1, 100);
        underTest.addAutoclicker();
        expect(underTest.autoclickerCost).toEqual(110);
    })

    test("should increase the cost of autoclicker with a second purchase of autoclicker", ()=> {
        const underTest = new DonutMaker(100, 2, 110);
        underTest.addAutoclicker();
        expect(underTest.autoclickerCost).toEqual(121);
    })

    test("should increase the amount of donuts by 1 for every autoclicker", ()=> {
        const underTest = new DonutMaker(100, 1, 100);
        underTest.addAutoclicker();
        underTest.addDonut();
        expect(underTest.numAutoclickers).toEqual(2);
        expect(underTest.numDonuts).toEqual(101);
    })
        
    // test("should increase the amount of donuts by 1 for third autoclicker", ()=> {
    //     const underTest = new DonutMaker(1, 2, 100);
    //     underTest.addDonut();
    //     underTest.addAutoclicker();
    //     expect(underTest.numAutoclickers).toEqual(3);
    //     expect(underTest.numDonuts).toEqual(2);
    // })


});