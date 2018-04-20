import {expect} from "chai"
import schemas from "../src/index"



describe("Index returns an object of functions to return schemas", () => {
	
	it("Returns an object of methods",() => {
		expect(schemas).to.be.an("object")
	}) 

	it("When messages are called it should return a message", () => {
		const res = schemas.messages()
		const sentTime = Date.now()
		expect(res).to.be.an("object")
		expect(res.uid).to.not.be.undefined
	})

})