/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import Contacts from "../../src/client/pages/Contacts"

test("renders learn react link", () => {
	render(Contacts)
	const linkElement = screen.getByText(/Contacts/i)
	expect(linkElement).toBeInTheDocument()
})
