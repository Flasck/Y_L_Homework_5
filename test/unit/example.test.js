import { render, screen } from "react-scripts-test"
import Contacts from "../../src/client/pages/Contacts"

test("renders learn react link", () => {
	render(Contacts)
	const linkElement = screen.getByText(/Contacts/i)
	expect(linkElement).toBeInTheDocument()
})
