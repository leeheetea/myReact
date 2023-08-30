import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Table } from "react-bootstrap";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);

  const callAPI = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios(
        `https://sample.bmaster.kro.kr/contacts?pageno=${page}`
      );
      setPosts(result.data.contacts);
      console.log(result);

      setLast(Math.ceil(result.data.totalcount / 5));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  const nextPage = () => {
    if (page < last) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) return <h1 className="my-5 text-center">Loading ...</h1>;

  return (
    <div>
      <Row className="my-5">
        <Col className="col p-5">
          <h1 className="text-center mb-5">연락처 목록</h1>
          <div className="text-end mb-3">
            <Link to="/contacts/write">
              <Button className="px-5">글쓰기</Button>
            </Link>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <td>number</td>
                <td>name</td>
                <td>photo</td>
                <td>tel</td>
                <td>address</td>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr className="text-center" key={post.no}>
                  <td>{post.no}</td>
                  <td>
                    <Link to={`/contacts/${post.no}`}>{post.name}</Link>
                  </td>
                  <td>
                    <img src={post.photo} alt={post.name} width="100px" />
                  </td>
                  <td>{post.tel}</td>
                  <td>{post.address}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between">
            <Button onClick={prevPage} disabled={page === 1 && true}>
              이전
            </Button>
            <span className="mx-3">
              {page} / {last}
            </span>
            <Button onClick={nextPage} disabled={page === last && true}>
              다음
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostList;
