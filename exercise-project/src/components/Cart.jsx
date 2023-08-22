import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { increaseCount, decreaseCount, removeItem, sortByName } from "../store";

const Cart = () => {
  const smallProductStyle = {
    border: "1px solid #bdd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h5 className="p-5">
        {state.user.name} {state.user.age}의 장바구니
      </h5>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품 이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, index) => (
            <tr key={index}>
              <td className="align-midde">{state.cart[index].id + 1}</td>
              <td className="align-midde">
                <img
                  style={smallProductStyle}
                  src={state.cart[index].imgUrl}
                  alt=""
                />
              </td>
              <td className="align-midde">{state.cart[index].title}</td>
              <td className="align-midde">{state.cart[index].count}</td>
              <td className="align-middle">
                <Button
                  className="me-2"
                  variant="outline-success"
                  onClick={() => dispatch(increaseCount(state.cart[index].id))}
                >
                  +
                </Button>
                <Button
                  className="me-2"
                  variant="outline-success"
                  onClick={() => dispatch(decreaseCount(state.cart[index].id))}
                >
                  -
                </Button>
                <Button
                  className="me-2"
                  variant="outline-danger"
                  onClick={() => dispatch(removeItem(state.cart[index].id))}
                >
                  삭제하기
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        onClick={() => dispatch(sortByName(state.cart.title))}
        variant="outline-primary"
      >
        이름 순 정렬
      </Button>
    </div>
  );
};

export default Cart;
