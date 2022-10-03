import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../components/Dashboard/Dashboard";

beforeEach(() => {
  render(<Dashboard />);
});

describe("Dashboard Component Test", () => {

  it("Dashboard testing",() => {
    const title = screen.getByTestId("dashboard");
    expect(title).toBeInTheDocument();
  });
  
  it("Card Main testing",async () => {
    const Main = await screen.findAllByText("How to use to Subly");
    expect(Main[0]).toBeInTheDocument();
  });
  
   it("Card languages testing",async () => {
    const language = await screen.findAllByText("This has many languages");
    expect(language[0]).toBeInTheDocument();
  });
  
  it("Card error testing", async () => {
    const error = await screen.findAllByText("An error occurred while processing your file. Delete file to try again and report issue if the problem persists.");
    expect(error[0]).toBeInTheDocument();
    const errorTitle = screen.getByText("This has an error");
    expect(errorTitle).toBeInTheDocument();
  });
  
  it("Card error buttons testing",async () => {
    const deleteBtn = await screen.findAllByRole("button",{
	  name: /Delete file/i,
	});
    expect(deleteBtn[0]).toBeInTheDocument();
	const reportIssue = screen.getByRole("button",{
	  name: /Report issue/i,
	});
    expect(reportIssue).toBeInTheDocument();
  });
  
   it("Card Transcribing testing",async () => {
    const transcribing = await screen.findAllByText("Transcribing subtitles");
    expect(transcribing[0]).toBeInTheDocument();
    const transcribingTitle = screen.getByText("This is transcribing");
    expect(transcribingTitle).toBeInTheDocument();
  });

  it("Card Edit testing",async () => {
    const imgReady = await screen.findAllByTestId("hoverEdit");
    fireEvent.mouseOver(imgReady[0]);
    const edit = await screen.findAllByRole("button",{
        name: /Edit/i,
      });
    expect(edit[0]).toBeInTheDocument();
  });

})