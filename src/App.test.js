import React from "react";
import { mount, shallow } from "enzyme";
import CustomImage from "./components/CustomImage";
import Company from "./components/Company";
import Info from "./components/Info";
import { GithubJobProvider } from "./context/githubJobProvider";

describe("CustomImage component", () => {
  const CustomImageWrapper = (props) => {
    const component = shallow(<CustomImage {...props} />);
    return component;
  };
  const wrapper = CustomImageWrapper();

  it("Component renders or not", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Should render a image component form chakara ui", () => {
    expect(wrapper.exists("Image")).toBe(true);
  });
});

// ****************************//

describe("Company component", () => {
  const CompanyWrapper = (props) => {
    const component = shallow(<Company {...props} />);
    return component;
  };
  const wrapper = CompanyWrapper();

  it("Component renders or not", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Should render a CustomImage component", () => {
    expect(wrapper.exists("CustomImage")).toBe(true);
  });
});

// ****************************//
describe("Info component", () => {
  const CompanyInfo = (props) => {
    const component = mount(
      <GithubJobProvider>
        <Info {...props} />
      </GithubJobProvider>
    );
    return component;
  };
  const wrapper = CompanyInfo();

  it("Component renders or not", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should render a Box component form chakara ui", () => {
    expect(wrapper.exists("Box")).toBe(true);
  });
  it("Should render a Heading component form chakara ui", () => {
    expect(wrapper.exists("Heading")).toBe(true);
  });
  it("Heading should have fontSize prop", () => {
    expect(wrapper.find("Heading").props().fontSize).toBe("xl");
  });
  it("Heading should have color prop", () => {
    expect(wrapper.find("Heading").props().color).toBe("red.300");
  });
  it("Box Should have a text", () => {
    expect(wrapper.find("Box").text()).toContain("Go back to main page");
  });
});
