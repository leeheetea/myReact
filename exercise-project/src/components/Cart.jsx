import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { increaseCount } from "../store";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h5>
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
              <td>{state.cart[index].id + 1}</td>
              <td>
                <img src={state.cart[index].imgUrl} alt="" />
              </td>
              <td>{state.cart[index].name}</td>
              <td>{state.cart[index].count}</td>
              <Button
                onClick={() => dispatch(increaseCount(state.cart[index].id))}
              >
                +
              </Button>
              <Button>-</Button>
              <Button>삭제하기</Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
