import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PostWrite = () => {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    address: "",
  });

  const navigator = useNavigate();
  const { name, tel, address } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onInsert = async () => {
    if (!name) {
      alert("이름을 입력하세요");
    } else if (!tel) {
      alert("연락처를 입력하세요");
    } else if (!address) {
      alert("주소를 입력하세요");
    } else {
      await axios.post("https://sample.bmaster.kro.kr/contacts", form);
      alert("새로운 데이터가 등록되었습니다.");
      navigator("/contacts");
    }
  };

  return (
    <div>
      <Row className="my-5">
        <Col className="p5">
          <Form.Control
            name="name"
            value={name}
            onChange={onChangeForm}
            className="my-3"
            placeholder="이름을 입력하세요"
          />
          <Form.Control
            name="tel"
            value={tel}
            onChange={onChangeForm}
            placeholder="연락처를 입력하세요"
          />
          <Form.Control
            name="address"
            value={address}
            onChange={onChangeForm}
            className="my-3"
            placeholder="주소를 입력하세요"
          />
          <div className="text-center mt-3">
            <Button
              className="me-2 px-5"
              type="button"
              onClick={() => onInsert()}
            >
              등록
            </Button>
            <Button variant="secondary px-5">취소</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostWrite;
