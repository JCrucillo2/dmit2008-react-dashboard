import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductOptionStyles = styled.ul`
    margin: 3rem 0 0;
    a {
        font-size: 14px;
    }
`;

function ProductOptions(props) {
    return (
        <>
            <ProductOptionStyles>
                <li>
                    <Link to="/dashboard">View all Products</Link>
                </li>
                <li>
                    <Link to="add">Add New Product</Link>
                </li>
            </ProductOptionStyles>
        </>
    );
}

export default ProductOptions;
