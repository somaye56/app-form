import { Button, Form, Input, Row, Col, Radio, Select,Checkbox } from 'antd'

const { Option } = Select;

function App() {
  return (
  <Form name='basic' wrapperCol={{ span: 24 }}>
  <Row gutter={16}>
    <Col span={8} offset={2} >
      <Form.Item label="Email" name="email" hasFeedback validateStatus="success" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>
    </Col>

    <Col span={8} offset={2}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>
    </Col>
  </Row>
  <Row gutter={16}>
    <Col span={5} offset={2}>
      <Form.Item label="Gender" name="Radiogroup" rules={[{ required: true, message: "Please Choose a gender!" }]}>
        <Radio.Group>
          <Radio value="female" >Female</Radio>
          <Radio value="male" >Male</Radio>
        </Radio.Group>
      </Form.Item>
    </Col>
    <Col span={6} offset={7}>
    <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    </Col>
  </Row>
  <Row gutter={16}>
    <Col span={5} offset={2}>
    <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          checkbox
        </Checkbox>
      </Form.Item>
    </Col>
  </Row>
  
  <Row>
    <Col span={24}>
    <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
    </Col>
  </Row>
  <Row>
    <Col offset={11}>
      <Form.Item>
        <Button type='primary' htmlType='submit' >Submit</Button>
      </Form.Item>
    </Col>
  </Row>
</Form>)
}
export default App;