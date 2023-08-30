import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, Card, Row, Col, Image } from "react-bootstrap";

const PostRead = () => {
  const navigator = useNavigate();
  const { no } = useParams();
  const [post, setPost] = useState({
    no: "",
    name: "",
    tel: "",
    address: "",
    photo: "",
  });
  const { name, tel, address, photo } = post;

  const callAPI = useCallback(async () => {
    try {
      const result = await axios(
        `https://sample.bmaster.kro.kr/contacts/${no}`
      );
      setPost(result.data);
      console.log(result);
    } catch (error) {
      console.log("Error axios", error);
    }
  }, [no]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  const onInsert = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedFile);

    const url = `https://sample.bmaster.kro.kr/contacts/${no}/photo`;

    await axios
      .post(url, formData)
      .then(() => {
        alert("파일이 업로드되었습니다.");
        navigator("/contacts");
      })
      .catch((error) => console.error("파일 업로드 중 오류 발생:", error));
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <Row className="my-5">
        <Col className="p-5">
          <h1 className="text-center mb-5">{name} 연락처 정보</h1>
          <div className="text-end mb-2">
            <Link to={`/contacts/update/${no}`}>
              <Button className="btn-sm">수정</Button>
            </Link>
          </div>
          <Card>
            <Card.Header>
              [{no}] {name}
            </Card.Header>
            <Card.Body>
              <Image src={photo} thumbnail />
            </Card.Body>
            <Card.Footer>
              {tel} {address}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <div>
        <input type="file" onChange={handleFileChange} />
        <Button className="me-2 px-5" type="button" onClick={() => onInsert()}>
          사진등록
        </Button>
      </div>
    </>
  );
};

export default PostRead;
