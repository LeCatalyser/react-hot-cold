import React from "react";
import { shallow } from "enzyme";

import Game from "./game";

describe("<Game/>", () => {
  it("Renders withoutcrashing", () => {
    shallow(<Game />);
  });

  it("it can start a new game", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [20, 45, 99, 1],
      feeback: "you got it!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });

    wrapper.instance().newGame();
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual("Make your guess!");
    expect(wrapper.state("correctAnswer")).toBeGreaterThanOrEqual(0);
    expect(wrapper.state("correctAnswer")).toBeLessThanOrEqual(100);
  });

  it("Can guess", () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 55
    });

    wrapper.instance().guess(20);
    expect(wrapper.state("guesses")).toEqual([20]);
    expect(wrapper.state("feedback")).toEqual("You're Cold...");

    wrapper.instance().guess(50);
    expect(wrapper.state("guesses")).toEqual([20, 50]);
    expect(wrapper.state("feedback")).toEqual("You're Hot!");

    wrapper.instance().guess(55);
    expect(wrapper.state("guesses")).toEqual([20, 50, 55]);
    expect(wrapper.state("feedback")).toEqual("You got it!");
  });
});
