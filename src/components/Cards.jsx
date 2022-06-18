import React, { useState, useEffect } from "react";
import CardItems from "./CardItems";
import "./Cards.css";
import { Col, Row, Card } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
function Cards() {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(10);
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptosList]);
  if (isFetching) return "loading";
  return (
    <div style={{ backgroundColor: "#FFFDD0", width: "100%" }}>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
