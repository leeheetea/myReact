import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const PostUpdate = () => {
  const [loading, setLoading] = useState();
  const navigator = useNavigate();
  const { no } = useParams();

  const [form, setForm] = useState({
    no: no,
    name: "",
    tel: "",
    address: "",
  });

  const { name, tel, address } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdate = async () => {
    if (window.confirm(`${name}의 데이터를 수정합니까?`)) {
      await axios.put(`https://sample.bmaster.kro.kr/contacts/${no}`, form);
      navigator(-1);
    }
  };

  const callAPI = async () => {
    setLoading(true);
    const result = await axios(
      `https://sample.bmaster.kro.kr/contacts/${no}`
    ).catch((e) => alert("fetch error", e));
    setForm(result.data);
    setLoading(false);
  };

  if (loading) {
    return <h1 className="text-center my-5">Loading...</h1>;
  }

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
            <Button className="me-2 px-5" type="button" onClick={onUpdate}>
              수정
            </Button>
            <Button onClick={callAPI} variant="secondary px-5">
              초기화
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostUpdate;
