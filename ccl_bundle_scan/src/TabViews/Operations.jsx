import { Typography, Form, Input, Button, Select, message } from "antd";
import { EMP_DATA } from "../constants";
import { useState } from "react";

export const Operations = () => {
  const [form, form1] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [inCount, setInCount] = useState(0);
  const [outCount, setOutCount] = useState(0);

  const handleFinish = (data) => {
    //handle API call
    console.log(">>>>>>>> submit data", data);
    setTimeout(() => {
      success();
      setInCount(inCount + 1);
      form.resetFields();
    }, [1000]);
  };

  const handleSelectEPF = (selectedId) => {
    const selectedEMP = EMP_DATA.filter((data) => data.value === selectedId)[0];

    //set field values according to the emp number
    form.setFieldsValue({
      teamName: selectedEMP.teamName,
      opration: selectedEMP.opration,
      machine: selectedEMP.machine,
    });
  };

  //display success message
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Bundle added to the operaation successfully",
    });
  };

  const handleOutCount = () => {
    setOutCount(outCount + 1);
  };

  const handleResetOutCount = () => {
    setOutCount(outCount > 0 ? outCount - 1 : 0);
    form1.resetFields();
  };
  return (
    <>
      <div>
        {contextHolder}
        <div>
          <div>
            <Typography.Text>In</Typography.Text>
            <div>
              <Form
                form={form1}
                onFinish={handleFinish}
                layout="horizontal"
                style={{
                  maxWidth: 250,
                }}
              >
                <Form.Item label="EPF NO:" name={"epf"}>
                  <Select
                    placeholder="Enter EPF number"
                    options={EMP_DATA}
                    optionFilterProp="label"
                    onSelect={(value) => {
                      handleSelectEPF(value);
                    }}
                  />
                </Form.Item>
                <Form.Item label="Team Name:" name={"teamName"}>
                  <Input disabled className="disableField" />
                </Form.Item>
                <Form.Item label="Operation Name" name={"opration"}>
                  <Input disabled className="disableField" />
                </Form.Item>
                <Form.Item label="Machine Name" name={"machine"}>
                  <Input disabled className="disableField" />
                </Form.Item>
                <Form.Item
                  label="Bundle Id"
                  required
                  name={"bundleIdOut"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid bundle Id",
                    },
                  ]}
                >
                  <Input placeholder="Please enter the bundle ID" />
                </Form.Item>
                <div className="inCount">
                  <p>In Count:</p> <p>{inCount}</p>
                </div>
                <div className="team_form_button_group">
                  <Form.Item>
                    <Button
                      type="default"
                      htmlType="reset"
                      className="resetBtn"
                    >
                      Reset
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitBtn"
                    >
                      In
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Form
              style={{
                maxWidth: 250,
              }}
            >
              <Typography.Text>Out</Typography.Text>
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
              <div className="inCount">
                <p>Out Count:</p> <p>{outCount}</p>
              </div>
              <div className="team_form_button_group">
                <Form.Item>
                  <Button
                    type="default"
                    htmlType="reset"
                    className="resetBtn"
                    onClick={handleResetOutCount}
                  >
                    Reset
                  </Button>
                  <Button
                    type="primary"
                    className="submitBtn"
                    onClick={handleOutCount}
                  >
                    Out
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
