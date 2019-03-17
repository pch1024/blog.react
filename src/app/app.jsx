import React from 'react';
import './app.scss';

import { Pagination, Icon } from 'antd';

import log from '../assets/common.js';
import Home from '../views/home.jsx';
import Login from '../views/login.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class HelloWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      wrapperStyle: {
        transform: 'translateX(0)',
      },
    };
  }

  render() {
    return (
      <div className="wrapper" style={this.state.wrapperStyle}>
        <div className="header" />
        <div className="about">
          <p className="title">你好, 我是 PCH1024</p>
          <p>
            这里是我的个人博客站，它基于强大的 React
            框架，响应式页面架构，在线的 Markdown
            文档编辑器，提供给更加便捷的博客内容管理和友好的阅读体验。
          </p>
        </div>
        <div className="main">
          <div className="arrow left">
            <Icon type="left" />
          </div>
          <div className="arrow right">
            <Icon type="right" />
          </div>
          <div className="title">
            <span>文 档</span>{' '}
          </div>
          <div className="list">
            <div className="content">
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
              <div className="item">
                1241241241241 123121 12341 2232 1231231 221 3312 23 121
              </div>
            </div>
          </div>

          <div className="pagination">
            <Pagination c size="small" total={50} />
          </div>
        </div>
        <div className="footer">footer</div>
      </div>
    );
  }
  componentWillMount() {
    log('msg from react');
  }
  componentDidMount() {
    this.MouseScroll();
    if ('ontouchstart' in document) {
      let el_app = document.querySelector('#app'),
        el_wrapper = document.querySelector('#app > .wrapper'),
        el_boxs = document.querySelectorAll('#app > .wrapper>div');

      el_app.style.overflowX = 'auto';
      if (el_app.offsetWidth < 500) {
        el_wrapper.style.width = el_app.offsetWidth * 4 + 'px';
        el_boxs.forEach(i => (i.style.width = el_app.offsetWidth + 'px'));
      }
    }
  }

  MouseScroll = () => {
    let translateX = 0,
      el_app = document.querySelector('#app'),
      el_wrapper = document.querySelector('#app > .wrapper');

    addWheelListener(el_app, e => {
      let loop = (el, path = []) => {
        path.push(el.className);
        if (el.parentNode) return loop(el.parentNode, path);
        else return path;
      };

      if (loop(e.target).includes('main')) return;

      e.preventDefault();
      let direction = e.deltaY / Math.abs(e.deltaY),
        scrollWidth =
          el_wrapper.offsetWidth -
          el_app.offsetWidth +
          2 * el_wrapper.offsetLeft;

      if (direction > 0) {
        translateX =
          this.state.translateX - 100 > -scrollWidth
            ? this.state.translateX - 100
            : -scrollWidth;
      } else {
        translateX =
          this.state.translateX + 100 < 0 ? this.state.translateX + 100 : 0;
      }

      this.setState({
        translateX: translateX,
        wrapperStyle: {
          transform: `translateX(${translateX}px)`,
        },
      });
    });
  };
}
