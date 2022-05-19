import useFetch from "./useFetch";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Checking data retrieval in list item", async () => {
  render(<App />);
  //use findBy when dealing with Async, and get when dealing with normal synchronous
  const listElement = await screen.findAllByRole("listitem");
  expect(listElement).not.toHaveLength(0);
});
