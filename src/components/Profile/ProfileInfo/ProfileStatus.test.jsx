import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("statusfrom props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });

  test("after creating span is displayed", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test("after creating input is not displayed", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    
    expect(() => {
        root.findByType('input');
    }).toThrow();
  });

  test("after creating STATUS is correct", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe("SUBSCRIBE TO BASIC");
  });

  test("inpus should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input =  root.findByType('input');
    expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
  });

  test("inpus should be displayed in editMode instead of span", () => {
      const mockCallBack = jest.fn();
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateProfileStatus={mockCallBack}/>);
    let instance =  component.getInstance();
    instance.diactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});