import React from 'react'
import { css } from 'emotion'
import Col from '../Col/index'
import Row from '../Row/index'

export const styles = {
  row: css`
    margin-bottom: 10px;
  `,
  col: css`
    padding: 10px;
    border: 1px solid orange;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 10px;
  `
}

export default () => {
  return (
    <>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={1}>
            <div className={styles.col}>1</div>
          </Col>
          <Col span={11}>
            <div className={styles.col}>11</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={2}>
            <div className={styles.col}>2</div>
          </Col>
          <Col span={10}>
            <div className={styles.col}>10</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={3}>
            <div className={styles.col}>3</div>
          </Col>
          <Col span={9}>
            <div className={styles.col}>9</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={4}>
            <div className={styles.col}>4</div>
          </Col>
          <Col span={8}>
            <div className={styles.col}>8</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={5}>
            <div className={styles.col}>5</div>
          </Col>
          <Col span={7}>
            <div className={styles.col}>7</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={6}>
            <div className={styles.col}>6</div>
          </Col>
          <Col span={6}>
            <div className={styles.col}>6</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={7}>
            <div className={styles.col}>7</div>
          </Col>
          <Col span={5}>
            <div className={styles.col}>5</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={8}>
            <div className={styles.col}>8</div>
          </Col>
          <Col span={4}>
            <div className={styles.col}>4</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={9}>
            <div className={styles.col}>9</div>
          </Col>
          <Col span={3}>
            <div className={styles.col}>3</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={10}>
            <div className={styles.col}>10</div>
          </Col>
          <Col span={2}>
            <div className={styles.col}>2</div>
          </Col>
        </Row>
      </div>
      <div className={styles.row}>
        <Row type="flex" gutter={6}>
          <Col span={11}>
            <div className={styles.col}>11</div>
          </Col>
          <Col span={1}>
            <div className={styles.col}>1</div>
          </Col>
        </Row>
      </div>
    </>
    
  )
}