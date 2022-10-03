import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropdownFilter from "../components/Dropdown/DropdownFilter";
let mediaData = [{
    "id": 1,
    "name": "How to use to Subly",
    "cover": "https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/1.jpg",
    "languages": [
        "en"
    ],
    "status": "ready",
    "createdAt": "2021-05-01T10:00:00.000Z",
    "updatedAt": "2021-05-01T10:00:00.000Z"
},
{
    "id": 3,
    "name": "This has an error",
    "cover": "https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/3.png",
    "languages": [
        "en"
    ],
    "status": "error",
    "errorMessage": "Failed while transcribing",
    "createdAt": "2021-07-03T22:11:00.000Z",
    "updatedAt": "2021-07-03T22:11:00.000Z"
}];

beforeEach(() => {
    render(<DropdownFilter handleChange={jest.fn()} data={mediaData} />);
});

describe("Dashboard Component Test", () => {

    it("Dashboard testing", async () => {
        const drpDown = await screen.findAllByTestId("drpDown");
        fireEvent.change(drpDown[0], { target: { value: "error" } })
        expect(screen.getByDisplayValue('Error')).toBeInTheDocument();
    });

})