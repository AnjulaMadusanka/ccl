/**
 * Team in component 
 * desc: Add a scan bundle to a desire team
*/
import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import "./styles.css";

export const TeamIn = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const teamList = [
    {
      value: "1",
      label: "Team 1",
    },
    {
      value: "2",
      label: "Team 2",
    },
    {
      value: "3",
      label: "Team 3",
    },
  ];

  //handle submit button event
  const handleSubmit = (values) => {
    //call api to add a bundle
    console.log("Team payload:", values);
    setTimeout(() => {
      success();
      form.resetFields();
    }, [1000]);
  };

//display success message
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Bundle added to the team successfully",
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        layout={"horizontal"}
        form={form}
        style={{
          maxWidth: 250,
          maxHeight: 500
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Team Name"
          name={"teamId"}
          required={true}
          rules={[
            {
              required: true,
              message: "Please select a team",
            },
          ]}
        >
          <Select
            options={teamList}
            placeholder="Select a team"
            optionFilterProp="label"
            allowClear={true}
          />
        </Form.Item>

        <Form.Item
          label="Bundle Id"
          required
          name={"bundleId"}
          rules={[
            {
              required: true,
              message: "Please enter a valid bundle Id",
            },
          ]}
        >
          <Input placeholder="Please enter the bundle ID" />
        </Form.Item>
        <div className="team_form_button_group">
          <Form.Item>
            <Button type="default" htmlType="reset" className="resetBtn">
              Reset
            </Button>
            <Button type="primary" htmlType="submit" className="submitBtn">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
