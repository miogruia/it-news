import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from './NewsCard';

const NewsCardList = ({ newsList }) => (
  <Container>
    <Row>
      {newsList.map(({ id, thumbnail, title, description, hasCloseButton }) => (
        <Col xs={12} md={6} lg={4} className="mb-4" key={id}>
          <NewsCard
            newsId={id}
            imgSrc={thumbnail}
            title={title}
            description={description}
            hasCloseButton={hasCloseButton}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default NewsCardList;